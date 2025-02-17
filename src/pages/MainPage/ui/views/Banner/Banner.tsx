import { classNames } from 'shared/lib/classNames';
import Background from 'shared/assets/images/main/banner-2.webp';
import { Button } from 'shared/ui/Button/Button';
import Play from 'shared/assets/icons/main/play.svg';
import { useTranslation } from 'react-i18next';
import { BannerProps } from './types';
import style from './Banner.module.scss';

export const Banner = ({ className }: BannerProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(style.Banner, {}, [className])}>
            <div className={style.background}>
                <div className={style.gradientTop} />
                <div className={style.gradientBottom} />
                <img src={Background} alt="background" />
            </div>
            <div className="container">
                <div className={style.wrapper}>
                    <h1>
                        {t('banner-h1')}
                    </h1>
                    <p>
                        {t('banner-desc')}
                    </p>
                    <Button>
                        <Play />
                        {t('banner-button')}
                    </Button>
                </div>
            </div>
        </div>
    );
};
