import { ReactNode } from "react";

export const enum ModalSize {
    L = "l",
    M = "m"
}

export interface ModalProps {
    className?:string
    children:ReactNode
    open:boolean
    setOpen: (open:boolean) => void
    size?: ModalSize
    withPortal?:boolean
}
