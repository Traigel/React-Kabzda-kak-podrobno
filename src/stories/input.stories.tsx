import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
    //component: ,
}

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input onChange={onChangeHandler}/> - {value}
    </>
};

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChangeHandler}/>
};

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return <input type={'checkbox'} checked={checked} onChange={onChangeHandler}/>
};

export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>('1')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.currentTarget.value)
    return <select value={selectValue} onChange={onChangeHandler}>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
    </select>
};

export const ControlledInputWithFixedValue = () => <input value={'Hello'}/>;