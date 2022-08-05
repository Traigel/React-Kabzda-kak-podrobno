import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateDate() {
    console.log('generateDate')
    return 1
}

export const Example = () => {
    console.log('Example')
    const [counter, setCounter] = useState(generateDate)

    return <>
        <button
            onClick={() => setCounter(state => state + 1)}
        >+
        </button>
        {counter}
    </>
}