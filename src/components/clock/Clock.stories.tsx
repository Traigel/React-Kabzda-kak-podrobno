import React, {useState, useEffect} from "react";

export default {
    title: 'Clock'
}

export const ClockExample = () => {

    const [date, srtDate] = useState<Date>()

    useEffect( () => {
        setInterval( () => {
            srtDate(new Date())
        }, 1000)
    }, [])

    let stringTime = date === undefined ? 'Click start' : `${date.getHours()}.${+ date.getMinutes()}.${date.getSeconds()}`

    return (
        <div>
            {stringTime}
            <div className="hasy">
                <div className="onen">12</div>
                <div className="threen">3</div>
                <div className="sixn">6</div>
                <div className="ninen">9</div>
                <div className="sekundes"></div>
                <div className="minutes"></div>
                <div className="has"></div>
                <div className="sentr"></div>
            </div>
        </div>
    )
}