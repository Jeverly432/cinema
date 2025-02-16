import { classNames } from 'shared/lib/classNames'
import style from './ThemeSwitcher.module.scss'
import { ThemeSwitcherProps } from './types'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from "shared/assets/icons/dark.svg"
import LightIcon from "shared/assets/icons/light.svg"
import { Button } from 'shared/ui/Button/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/types'

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M} className={classNames(style.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}