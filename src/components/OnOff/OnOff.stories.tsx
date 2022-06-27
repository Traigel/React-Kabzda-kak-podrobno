import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import { OnOff } from './OnOff';
import {ComponentStory} from "@storybook/react";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action('Click on title')

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>;

export const EmptyOnOff = Template.bind({});
EmptyOnOff.args = {
    onOff: false,
    onClick: callback
}

export const ModeOnOff = () => {
    const [onOff, setOnOff] = useState<boolean>(false)
    return <OnOff onOff={onOff} onClick={(el)=>setOnOff(el)}/>
}