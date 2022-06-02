import React, {useState} from "react";
import s from './OnOff.module.css'

export const OnOff = () => {

    let [onOff, setOnOff] = useState(true)

    let colorOnOff = (a:boolean) => {
        setOnOff(a)
    }

    return <div>
            <button onClick={()=>colorOnOff(true)} className={`${onOff && s.on}`}>On</button>
            <button onClick={()=>colorOnOff(false)} className={`${!onOff && s.off}`}>Off</button>
            <span className= {`${s.dot} ${onOff ? s.dotOn : s.dotOff}`}></span>
    </div>
}