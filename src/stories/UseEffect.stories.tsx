import React, {useState, useEffect} from "react";

export default {
    title: 'useEffect demo'
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

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')

        setInterval( ()=> {
            setCounter( state => state + 1)
        }, 1000)

    }, [])



    return <>
        counter: {counter}
    </>
}