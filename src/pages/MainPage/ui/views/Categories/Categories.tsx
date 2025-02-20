import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './Categories.module.scss';
import { CategoriesProps } from './types';

export const Categories = ({ className }: CategoriesProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(style.Categories, {}, [className])}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>
                        {t('categories-title')}
                    </h2>
                    <p>
                        {t('categories-desc')}
                    </p>
                </div>
            </div>
        </div>
    );
};
