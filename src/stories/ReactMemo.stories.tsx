import React from "react";
import {useState} from "react";

export default {
    title: 'React memo demo',
}

const NewMessagesCounter = (props: {count: number}) => {
    console.log('Counter')
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vova', 'Alex', 'Dima'])
    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }
    return <>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}