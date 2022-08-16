import React, {useState, useEffect} from "react";
import styles from './AnalogClock.module.css'

type ClockType = {
    mode: 'analog' | 'digital'
}

export const Clock = (props: ClockType) => {

    const [date, srtDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            srtDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    const getHours = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}`
    const getMinutes = `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
    const getSeconds = `${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`

    let digitalClock = getHours + ':' + getMinutes + ':' + getSeconds

    return (
        <div>
            {props.mode === 'digital'
                ? digitalClock
                : <AnalogClock
                    seconds={+getSeconds}
                    minutes={+getMinutes}
                    hours={+getHours}
                />
            }
        </div>
    )
}



type DateType = {
    seconds: number
    minutes: number
    hours: number
}

const AnalogClock = (date: DateType) => {

    const secondsStyle = {
        transform: `rotate(${date.seconds * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.hours * 30}deg)`
    };

    return (
        <div className={styles.clock}>
            <div className={styles.analogClock}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}
