import React, {useState} from "react";
import style from './OnOff.module.css'

type OnOffTypeProps = {
    defaultOn?: boolean
}

export const OnOff2 = (props:OnOffTypeProps) => {

    let [onOff, setOnOff] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

    let colorOnOff = (el:boolean) => {
        setOnOff(el)
    }

    return <div>
            <button onClick={()=>colorOnOff(true)} className={`${onOff ? style.on : ''}`}>On</button>
            <button onClick={()=>colorOnOff(false)} className={`${!onOff ? style.off : ''}`}>Off</button>
            <span className= {`${style.dot} ${onOff ? style.dotOn : style.dotOff}`}></span>
    </div>
}