import { classNames } from "shared/lib/classNames/classNames";
import style from "./Modal.module.scss";
import { ModalProps } from "./types";

export const Modal = ({
    className, children, open, setOpen,
}: ModalProps) => {
    const closeHandler = () => {
        setOpen(!open);
    };

    const mods: Record<string, boolean | string> = {
        [style.active]: open,
    };

    return (
        <div className={classNames(style.Modal, mods, [className])}>
            <div className={style.overview} onClick={closeHandler}>
                <div className={style.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};
