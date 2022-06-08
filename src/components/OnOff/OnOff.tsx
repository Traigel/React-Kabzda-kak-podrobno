import React, {useState} from "react";
import style from './OnOff.module.css'

export const OnOff = () => {

    let [onOff, setOnOff] = useState<boolean>(false)

    let colorOnOff = (el:boolean) => {
        setOnOff(el)
    }

    return <div>
            <button onClick={()=>colorOnOff(true)} className={`${onOff ? style.on : ''}`}>On</button>
            <button onClick={()=>colorOnOff(false)} className={`${!onOff ? style.off : ''}`}>Off</button>
            <span className= {`${style.dot} ${onOff ? style.dotOn : style.dotOff}`}></span>
    </div>
}