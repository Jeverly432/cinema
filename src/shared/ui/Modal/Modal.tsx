import { classNames } from "shared/lib/classNames/classNames";
import {
    Fragment,
    useCallback, useEffect, useRef, useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Modal.module.scss";
import { ModalProps, ModalSize } from "./types";
import { Portal } from "../Portal/Portal";

export const Modal = ({
    className,
    children,
    open,
    setOpen,
    size = ModalSize.L,
    withPortal = true,
}: ModalProps) => {
    const closeHandler = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const mods: Record<string, boolean | string> = {
        [style.active]: open,
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
            document.body.classList.remove("no-scroll");
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onKeyDown]);

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    };

    const content = (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={classNames(style.Modal, mods, [className, style[size]])}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={backdropVariants}
                    transition={{ duration: 0.3 }}
                    onClick={closeHandler}
                >
                    <motion.div
                        className={style.content}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return withPortal ? <Portal>{content}</Portal> : content;
};
