import { classNames } from 'shared/lib/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/types'
import { useTranslation } from 'react-i18next'
import Sparks from 'shared/assets/icons/global/sparkles.svg'
import { ThemeSwitcherProps } from './types'
import style from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    const { t } = useTranslation()

    return (
        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M} className={classNames(style.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {/* <Sparks /> */}
            {' '}
            {theme === Theme.DARK ? t('theme-light') : t('theme-dark')}
        </Button>
    )
}
