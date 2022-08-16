import React from "react";

// import AnalogueClock from "react-analogue-clock";
import "./styles.css";

export const AnalogueClockLibrary = function App() {
    const clockOptions = {
        useCustomTime: true,
        width: "300px",
        baseColor: "#3b73b9",
        borderColor: "#7bb216",
        borderWidth: 0,
        centerColor: "#7bb216",
        handColors: {
            hour: "#7bb216",
            minute: "#7bb216",
            second: "#FFFFFF"
        },
        notchColor: "#FFFFFF",
        numbersColor: "#FFFFFF",
        showNumbers: true,

        seconds: 1, // set your
        minutes: 10, // own
        hours: 22 // time here.
    };
    return (
        <div className="App">
            {/*<AnalogueClock {...clockOptions} />*/}
        </div>
    );
}
