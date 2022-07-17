import React, {useMemo} from "react";
import {useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('UsersSecret')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMem')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vova', 'Alex', 'Dima'])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUsers = () => setUsers([...users, 'Agata'])

    return <>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>add users</button>
        {counter}
        <Users users={newArray}/>
    </>
}