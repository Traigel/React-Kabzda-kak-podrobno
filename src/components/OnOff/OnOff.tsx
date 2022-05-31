import React, {useState} from "react";
import s from './OnOff.module.css'

export const OnOff = () => {

    let [onOff, setOnOff] = useState(true)

    let colorOnOff = (a:boolean) => {
        setOnOff(a)
        return console.log(a)
    }

    return <div>
            <button onClick={()=>colorOnOff(true)} className={onOff ? s.on : s.no}>On</button>
            <button onClick={()=>colorOnOff(false)} className={onOff ? s.no : s.off}>Off</button>
            <span className={onOff ? s.dotOn : s.dotOff}></span>
    </div>
}