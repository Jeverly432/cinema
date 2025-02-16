import { classNames } from 'shared/lib/classNames'
import style from './Categories.module.scss'
import { CategoriesProps } from './types'

export const Categories = ({className}: CategoriesProps) => {
    return (
        <div className={classNames(style.Categories, {}, [className])}>
            <div className='container'>
        
            </div>
        </div>
    )
}