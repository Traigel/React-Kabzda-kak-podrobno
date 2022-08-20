import React, {useState, useEffect} from "react";
import {clearInterval} from "timers";

export default {
    title: 'useEffect'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {       //выполняется каждый раз
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {       //выполняется только при первой отрисовке
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {       // выполняется каждый раз когда зависимость меняется
        console.log('useEffect first and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        <button
            onClick={() => setCounter(state => state + 1)}
        >+
        </button>
        {counter}
        <button
            onClick={() => setFake(state => state + 1)}
        >fake
        </button>
        {fake}
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')

        const intervalID = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return <>
        counter: {counter}
    </>
}

export const ResetEffectExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        return () => {
            console.log('Effect occurred')
        }

    }, [])

    const onClickHandler = () => {
        setCounter(state => state + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={onClickHandler}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    console.log('KeysTrackerExample')
    const [text, setText] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text => text + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('useEffect every render')

        const timeoutID = setTimeout(() => {
            setText('3 seconds passed')
            console.log('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [])


    return <>
        text: {text}
    </>
}