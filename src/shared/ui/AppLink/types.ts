import { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}
