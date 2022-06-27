import React from "react";
import style from './OnOff.module.css'

type OnOffTypeProps = {
    /**
     * boolean значение, обределяет какая кнопка выделина
     */
    onOff: boolean
    /**
     * При нажатии меяет пропс onOff на противоположный
     * @param el
     */
    onClick: (el: boolean) => void
}

export const OnOff = (props: OnOffTypeProps) => {

    let colorOnOff = (el: boolean) => props.onClick(el)

    return <div>
        <button onClick={() => colorOnOff(true)} className={`${props.onOff ? style.on : ''}`}>On</button>
        <button onClick={() => colorOnOff(false)} className={`${!props.onOff ? style.off : ''}`}>Off</button>
        <span className={`${style.dot} ${props.onOff ? style.dotOn : style.dotOff}`}></span>
    </div>
}