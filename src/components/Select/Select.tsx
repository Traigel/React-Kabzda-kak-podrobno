import React, {useState, KeyboardEvent, useEffect} from 'react';
import style from './Select.module.css'

export type ItemType = {
    id: string
    title: string
}

type SelectPropsType = {
    value: ItemType
    items: ItemType[]
    collapsed: boolean
    onClickCollapsed: () => void
    onClickItem: (id: string, title: string) => void
    backgroundSelectColor?: string
    backgroundValueColor?: string
    className?: string
}

export const Select = (props: SelectPropsType) => {

    const [itemIDHover, setItemIDHover] = useState<string>(props.value.id)

    useEffect(()=>{
        setItemIDHover(props.value.id);
    },[props.value.id])

    const onClickCollapsedHandler = () => props.onClickCollapsed()

    const onClickItemHandler = (id: string, title: string) => props.onClickItem(id, title)

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === itemIDHover) {
                    setItemIDHover(props.items[i+1].id)
                    break;
                }
            }
        }
        if (e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === itemIDHover) {
                    setItemIDHover(props.items[i-1].id)
                    break;
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            onClickCollapsedHandler()
        }
    }

    const stylesItem = {backgroundColor: props.backgroundSelectColor ? props.backgroundSelectColor : ''}
    const stylesValue = {backgroundColor: props.backgroundValueColor ? props.backgroundValueColor : ''}

    const isActive = props.collapsed ? style.active : '';

    return (
        <div className={`${style.select} ${isActive} ${props.className}`}
             onKeyUp={onKeyUpHandler}
             tabIndex={0}
        >

            <div className={style.span} style={stylesValue} onClick={onClickCollapsedHandler}>
                {props.value.title ? props.value.title : 'Name'} &dArr;
            </div>
            <div className={style.items} style={stylesItem}>
                {props.items.map(el => {
                    const onClick = () => onClickItemHandler(el.id, el.title)
                    const onMouseEnterHandler = () => setItemIDHover(el.id)
                    return <div key={el.id}
                                className={`${itemIDHover === el.id ? style.item : ''}`}
                                onClick={onClick}
                                onMouseEnter={onMouseEnterHandler}
                    >{el.title}</div>
                })}
            </div>

        </div>
    )
};