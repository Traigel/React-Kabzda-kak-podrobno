import React from 'react';

type AccordionPropsType = {
    /**
     * Имя списка
     */
    titleValue: string
    /**
     * boolean значение определяет аткрыт или закрыт акардион
     */
    collapsed: boolean
    /**
     * Функция работы акардионна
     */
    onClick: ()=> void
    color?: string
}

const Accordion = (props: AccordionPropsType) => {
    return<div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
            { !props.collapsed &&  <AccordionBody/>}
        </div>
};

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
    color?: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 style={{color: props.color ? props.color : "black" }} onClick={(e)=>props.onClick()}> ---{props.title}--- </h3>
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