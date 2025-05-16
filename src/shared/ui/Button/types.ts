import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = "clear"
}

export enum ButtonSize {
    XS = "xs",
    S = "s",
    M = "m",
    L = "l",
    COMPACT = "compact"
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
}
