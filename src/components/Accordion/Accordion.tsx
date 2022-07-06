import React from 'react';

type ItemType = {
    title: string
    value: any
}

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
    /**
     * Массив в данных
     */
    items: ItemType[]
    onClickCallBack: (value: any)=> void
    color?: string
}

const Accordion = (props: AccordionPropsType) => {
    return<div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
            { !props.collapsed &&  <AccordionBody items={props.items} onClickCallBack={props.onClickCallBack}/>}
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

type AccordionBodyProsType = {
    items: ItemType[]
    onClickCallBack: (value: any)=> void
}

const AccordionBody = (props: AccordionBodyProsType) => {

    return <div>
        <ul>
            {props.items.map((el, index) => {
                const onClickHandler = () => props.onClickCallBack(el.value)
                return <li key={index} onClick={onClickHandler}>{el.title}</li>
            })}
        </ul>
    </div>
};

export default Accordion;