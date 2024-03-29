import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";
import {ComponentStory} from '@storybook/react';

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('Click on title')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: true,
    onClick: callback,
    items: [
        {title: 'Vova', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Dima', value: 3},
    ],
    onClickCallBack: callback
}

export const UnCollapsedAccordion = Template.bind({});
UnCollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: false,
    onClick: callback,
    items: [
        {title: 'Vova', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Dima', value: 3},
    ],
    onClickCallBack: callback
}

export const ModeAccordion = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Menu'}
        collapsed={value}
        items={[
            {title: 'Vova', value: 1},
            {title: 'Alex', value: 2},
            {title: 'Dima', value: 3},
        ]}
        onClickCallBack={callback}
        onClick={() => setValue(!value)}
    />
}