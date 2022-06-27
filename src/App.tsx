import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff2} from './components/OnOff/OnOff2';
import {Rating} from "./components/Rating/Rating";
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';

function App() {

    return (
        <div className="App">
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <Rating/>
            <Rating/>
            <Rating/>
            <OnOff2/>
            <OnOff2/>
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