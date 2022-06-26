import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: ()=> void
}

const Accordion = (props: AccordionPropsType) => {
    return<div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            { !props.collapsed &&  <AccordionBody/>}
        </div>
};

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={(e)=>props.onClick()}> ---{props.title}--- </h3>
};

const AccordionBody = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
};

export default Accordion;