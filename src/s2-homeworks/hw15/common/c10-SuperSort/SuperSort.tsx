import React from 'react'
import s from "./SuperSort.module.css";
import icon_UP_filled from '../../icons/icon_UP_filled.svg'
import icon_DOWN_filled from '../../icons/icon_DOWN_filled.svg'
import icon_noneSorted from '../../icons/icon_noneSorted.svg'

// добавить в проект иконки и импортировать
//const downIcon = '[\\/]'
//const upIcon = '[/\\]'
//const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    else return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    //const noneIcon =
    /*    const icon = sort === down
            ? icon_DOWN_filled
            : sort === up
                ? icon_UP_filled
                : noneIcon*/

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.iconSort}
        >
            {sort === down ? <img src={icon_DOWN_filled} id={id + '-icon' + sort} alt={'icon_DOWN_filled'}/>
                : sort === up ? <img src={icon_UP_filled} id={id + '-icon' + sort} alt={'icon_UP_filled'}/>
                    : <img src={icon_noneSorted} id={id + '-icon' + sort} alt={'icon_noneSorted'}/>
            }
            {/*<img src={icon_DOWN} id={id + '-icon' + sort} alt={'icon_DOWN'}/>*/}

            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*            {icon} а это убрать*/}
        </span>
    )
}

export default SuperSort
