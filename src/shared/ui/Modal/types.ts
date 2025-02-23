import { ReactNode } from "react";

export interface ModalProps {
    className?:string
    children:ReactNode
    open:boolean
    setOpen: (open:boolean) => void
}
