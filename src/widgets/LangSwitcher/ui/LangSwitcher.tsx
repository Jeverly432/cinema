import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/types'
import { LangSwitcherProps } from './types'

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggle} size={ButtonSize.M} className={classNames('', {}, [className])}>
            {t('language')}
        </Button>
    )
}
