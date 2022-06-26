import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('Click on title')

export const CollapsedAccordion = () => <Accordion titleValue={'Menu'} collapsed={false} onClick={callback}/>
export const UnCollapsedAccordion = () => <Accordion titleValue={'Menu'} collapsed={true} onClick={callback}/>
export const ModeAccordion = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'} collapsed={value} onClick={() => setValue(!value)}/>
}