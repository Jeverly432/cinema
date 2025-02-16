import { classNames } from 'shared/lib/classNames'
import style from './AppLink.module.scss'
import { AppLinkProps, AppLinkTheme } from './types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link to={to} {...otherProps} className={classNames(style.AppLink, {}, [className, style[theme]])}>
            {children}
        </Link>
    )
}