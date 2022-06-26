import React, {useState} from 'react';
import style from './UncontrolledAccordion.module.css'

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const UncontrolledHandler = () => setCollapsed(!collapsed && true)

    return <div>
        <AccordionTitle title={props.titleValue} callBack={UncontrolledHandler}/>
        {collapsed && <AccordionBody/>}
    </div>
};

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    const onClickH3Handler = () => props.callBack()

    return <h3 className={style.h3} onClick={onClickH3Handler}> {props.title} </h3>
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