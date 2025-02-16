import { classNames } from 'shared/lib/classNames'
import style from './Button.module.scss'
import { ButtonProps, ButtonSize, ButtonTheme } from './types'
import { FC } from 'react'

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ButtonTheme.PRIMARY, size = ButtonSize.L, ...otherProps } = props

    return (
        <button {...otherProps} className={classNames(style.Button, {}, [className, style[theme], style[size]])}>
            {children}
        </button>
    )
}