import { classNames } from "shared/lib/classNames/classNames";
import {
    useCallback, useEffect, useRef, useState,
} from "react";
import style from "./Modal.module.scss";
import { ModalProps, ModalSize } from "./types";
import { Portal } from "../Portal/Portal";

const ANIMATION_DELAY = 300;

export const Modal = ({
    className,
    children,
    open,
    setOpen,
    size = ModalSize.L,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef <ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        setIsClosing(true);

        timerRef.current = setTimeout(() => {
            setOpen(!open);
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [open, setOpen]);

    const mods: Record<string, boolean | string> = {
        [style.active]: open,
        [style.isClosing]: isClosing,
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (open) {
            window.addEventListener("keydown", onKeyDown);
            document.body.classList.add("no-scroll");
        }
        return () => {
            clearTimeout(timerRef.current);
            document.body.classList.remove("no-scroll");
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(style.Modal, mods, [className, style[size]])}>
                <div className={style.overview} onClick={closeHandler}>
                    <div className={style.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
