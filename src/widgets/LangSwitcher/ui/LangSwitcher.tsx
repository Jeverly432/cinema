import { classNames } from 'shared/lib/classNames'
import style from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/types'
import Lang from "shared/assets/icons/language.svg"

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru")
    }

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggle} size={ButtonSize.M} className={classNames(style.LangSwitcher)}>
            <Lang />
            {t('language')}
        </Button>
    )
}