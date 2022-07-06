import React from 'react';
import {Select} from "./Select";
import {ComponentStory} from "@storybook/react";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select stories',
    component: Select
}

const onClickCollapsed = action('Click on title')
const onClickItem = action('Click on title')

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;

export const SelectOnOff = Template.bind({});
SelectOnOff.args = {
    value: 'Name',
    items: [
        {id: v1(), title: 'Vova'},
        {id: v1(), title: 'Alex'},
        {id: v1(), title: 'Dima'},
        {id: v1(), title: 'Anna'},
    ],
    collapsed: false,
    onClickCollapsed: onClickCollapsed,
    onClickItem: onClickItem
}