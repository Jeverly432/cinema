import { ButtonHTMLAttributes, forwardRef } from 'react'
import { classNames } from 'shared/lib/classNames'
import style from './Button.module.scss'
import { ButtonProps, ButtonSize, ButtonTheme } from './types'
import { FC } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.L,
        ...otherProps
    },
    ref
) => {
    return (
        <button
            ref={ref}
            className={classNames(style.Button, {}, [className, style[theme], style[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
})
