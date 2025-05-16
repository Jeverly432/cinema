import { classNames } from "shared/lib/classNames";
import Background from "shared/assets/images/discovery/drakula.jpg";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/types";
import Play from "shared/assets/icons/discovery/play.svg";
import WatchList from "shared/assets/icons/global/watchlist.svg";
import style from "./Banner.module.scss";
import { BannerProps } from "./types";

export const Banner = ({ className }: BannerProps) => (
    <div className={classNames(style.Banner, {}, [className])}>
        <div className={style.background}>
            <img src={Background} alt="background" />
        </div>
        <div className={style.inner}>
            <div className={style.genre}>
                Series
            </div>
            <h1 className={style.title}>
                Dracula
            </h1>
            <p className={style.info}>
                1 Season • 6 Episodes • Superhero • Marvel
            </p>
            <div className={style.block}>
                <Button size={ButtonSize.L} theme={ButtonTheme.PRIMARY} className={style.thriller}>
                    <Play />
                    Watch Thriller
                </Button>
                <Button size={ButtonSize.COMPACT} theme={ButtonTheme.CLEAR} className={style.watchlist}>
                    <WatchList />
                    Add Watchlist
                </Button>
            </div>
        </div>
    </div>
);
