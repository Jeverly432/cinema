'use client';

import React, { PropsWithChildren } from 'react';
import {
    useFloating,
    autoUpdate,
    flip,
    shift,
    useClick,
    useRole,
    useDismiss,
    useInteractions,
    useMergeRefs,
    FloatingPortal,
    offset,
    Placement,
} from '@floating-ui/react';
import { classNames } from 'shared/lib/classNames';
import style from './Dropdown.module.scss';

interface DropdownOptions {
    initialOpen?: boolean;
    isOpen?: boolean;
    placement?: Placement;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    clickEnabled?: boolean;
    style?: React.CSSProperties;
}

export function useDropdown({
    initialOpen = false,
    isOpen: controlledOpen,
    onOpenChange: setControlledOpen,
    placement = 'bottom-end',
    clickEnabled = true,
}: DropdownOptions) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [offset(5), flip(), shift({ padding: 5 })],
    });

    const { context } = data;
    const click = useClick(context, { enabled: clickEnabled, event: 'mousedown' });
    const role = useRole(context, { role: 'listbox' });
    const dismiss = useDismiss(context);
    const interactions = useInteractions([click, role, dismiss]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
        }),
        [open, setOpen, interactions, data],
    );
}

type ContextType = ReturnType<typeof useDropdown> | null;

const DropdownContext = React.createContext<ContextType>(null);

export const useDropdownContext = () => {
    const context = React.useContext(DropdownContext);

    if (context == null) {
        throw new Error('Dropdown components must be wrapped in <Dropdown />');
    }

    return context;
};

export function Dropdown({ children, ...options }: PropsWithChildren<DropdownOptions>) {
    const dropdown = useDropdown(options);
    return <DropdownContext.Provider value={dropdown}>{children}</DropdownContext.Provider>;
}

Dropdown.Anchor = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((
    { children, ...props },
    propRef,
) => {
    const context = useDropdownContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (!React.isValidElement(children)) throw new Error('DropdownTrigger must be passed a valid React element');

    return React.cloneElement(
        children,
        context.getReferenceProps({
            ref,
            ...props,
            ...children.props,
            'data-state': context.open ? 'open' : 'closed',
        }),
    );
});

Dropdown.Content = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((
    // eslint-disable-next-line react/prop-types
    { style: incomingStyle, className, ...props },
    propRef,
) => {
    const {
        open, context, getFloatingProps, floatingStyles,
    } = useDropdownContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!open) return null;

    return (
        <FloatingPortal>
            <div
                ref={ref}
                style={{
                    ...floatingStyles,
                    ...(incomingStyle || {}),
                }}
                role="menu"
                className={classNames(style.Dropdown, {}, [className])}
            >
                <div {...getFloatingProps(props)} />
            </div>
        </FloatingPortal>
    );
});
