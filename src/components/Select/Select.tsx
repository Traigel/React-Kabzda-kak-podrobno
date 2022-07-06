import React from 'react';
import style from './Select.module.css'

export type ItemType = {
    id: string
    title: string
}

type SelectPropsType = {
    value: string
    items: ItemType[]
    collapsed: boolean
    onClickCollapsed: () => void
    onClickItem: (title: string) => void
}

export const Select = (props: SelectPropsType) => {

    const onClickCollapsedHandler = () => props.onClickCollapsed()

    return (
        <div className={style.selectItem}>
            <div className={style.value} onClick={onClickCollapsedHandler}>{props.value}</div>
            {props.collapsed &&
                <div>
                    {props.items.map(el => {
                        const onClickItemHandler = () => props.onClickItem(el.title)
                        return <div key={el.id} onClick={onClickItemHandler}>{el.title}</div>
                    })}
                </div>
            }
        </div>
    )
};