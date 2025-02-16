import { classNames } from 'shared/lib/classNames'
import style from './Banner.module.scss'
import { BannerProps } from './types'
import Background from "shared/assets/images/main/banner.webp"
import { Button } from 'shared/ui/Button/Button'
import Play from "shared/assets/icons/main/play.svg"

export const Banner = ({ className }: BannerProps) => {
    return (
        <div className={classNames(style.Banner, {}, [className])}>
            <div className={style.background}>
                <img src={Background} alt="background" />
            </div>
            <div className='container'>
                <div className={style.wrapper}>
                    <h1>
                        The Best Streaming Experience
                    </h1>
                    <p>
                        StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                    </p>
                    <Button>
                        <Play /> Start Watching Now
                    </Button>
                </div>
            </div>
        </div>
    )
}