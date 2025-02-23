import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = "clear"
}

export enum ButtonSize {
    M = "m",
    L = "l",
    S = "s"
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
}
