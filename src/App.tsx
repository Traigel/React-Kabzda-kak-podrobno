import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";

function App() {

    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
            <Rating value={1}/>
            <Rating value={3}/>
            <Rating value={5}/>
            <OnOff/>
            <OnOff/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
};

export default App;