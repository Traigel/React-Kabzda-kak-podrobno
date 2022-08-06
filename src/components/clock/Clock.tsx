import React, {useState, useEffect} from "react";
import styles from './Clock.module.css'


export const ClockExample = () => {

    const [date, srtDate] = useState<Date>()

    useEffect( () => {
        setInterval( () => {
            srtDate(new Date())
        }, 1000)
    }, [])

    let stringTime = date === undefined ? 'Click start' : `${date.getHours()}.${+ date.getMinutes()}.${date.getSeconds()}`

    return (
        <div style={{width: '300px', margin: '0 auto'}}>
            {stringTime}
            <div className={styles.hasy}>
                <div className={styles.onen}>12</div>
                <div className={styles.threen}>3</div>
                <div className={styles.sixn}>6</div>
                <div className={styles.ninen}>9</div>
                <div className={styles.sekundes}></div>
                <div className={styles.minutes}></div>
                <div className={styles.has}></div>
                <div className={styles.sentr}></div>
            </div>
        </div>
    )
}