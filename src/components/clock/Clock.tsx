import React, {useState, useEffect} from "react";
import styles from './Clock.module.css'


export const Clock = () => {

    const [date, srtDate] = useState<Date>(new Date())

    useEffect( () => {
        const intervalID = setInterval( () => {
            srtDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let stringTime =
        `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:
        ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:
        ${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`

    return (
        <div>
            {stringTime}
        </div>
    )
}