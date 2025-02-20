import { classNames } from 'shared/lib/classNames/classNames';
import {
    cloneElement, createContext, forwardRef, HTMLProps, isValidElement, PropsWithChildren, useContext, useState, useEffect,
} from 'react';
import {
    useFloating,
    useMergeRefs,
    useHover,
    useInteractions,
} from '@floating-ui/react';
import style from './Tooltip.module.scss';

export enum TooltipPlacement {
    Top = 'top',
    TopStart = 'top-start',
    TopEnd = 'top-end',
    Right = 'right',
    RightStart = 'right-start',
    RightEnd = 'right-end',
    Bottom = 'bottom',
    BottomStart = 'bottom-start',
    BottomEnd = 'bottom-end',
    Left = 'left',
    LeftStart = 'left-start',
    LeftEnd = 'left-end'
}

interface TooltipOptions {
    initialOpen?: boolean;
    placement?: TooltipPlacement
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export function useTooltip({
    initialOpen = false,
    placement = TooltipPlacement.BottomEnd,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
}: TooltipOptions) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
    });

    const hover = useHover(data.context, {
        enabled: true,
        delay: { open: 100, close: 100 },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
    ]);

    return {
        open,
        setOpen,
        getReferenceProps,
        getFloatingProps,
        ...data,
    };
}

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = createContext<ContextType>(null);

export const useTooltipContext = () => {
    const context = useContext(TooltipContext);

    if (context == null) {
        throw new Error('Tooltip components must be wrapped in <Tooltip />');
    }

    return context;
};

export function Tooltip({ children, ...option }: PropsWithChildren<TooltipOptions>) {
    const tooltip = useTooltip(option);
    return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
}

Tooltip.Trigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
    ({ children, ...props }, propRef) => {
        const context = useTooltipContext();
        const childrenRef = (children as any).ref;
        const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

        if (!isValidElement(children)) {
            throw new Error('TooltipTrigger must be passed a valid React element');
        }

        return cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
            }),
        );
    },
);

Tooltip.Content = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((
    { style: incomingStyle, className, ...props },
    propRef,
) => {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!context.open) return null;

    return (
        <div
            ref={ref}
            style={{
                position: context.strategy,
                top: context.y ?? 0,
                left: context.x ?? 0,
                ...(incomingStyle || {}),
            }}
            className={classNames(style.Tooltip, {}, [className])}
            {...context.getFloatingProps(props)}
        />
    );
});
