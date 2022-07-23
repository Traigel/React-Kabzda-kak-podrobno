import React, {useCallback, useMemo} from "react";
import {useState} from "react";

export default {
    title: 'useCallback',
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [books])

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         setBooks([...books, 'Angular'])
    //     }
    // }, [books])

    const memoizedAddBook2 = useCallback(() => setBooks([...books, 'Angular']), [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}

type BooksType = {
    addBook: () => void
}

const BooksSecret = (props: BooksType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)