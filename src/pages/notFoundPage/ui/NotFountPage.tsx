import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './NotFountPage.module.scss';

export const NotFountPage = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.NotFountPage)}>
            {t('not-found')}
        </div>
    );
};
