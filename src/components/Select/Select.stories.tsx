import React, {useState} from 'react';
import {ItemType, Select} from "./Select";
import {ComponentStory} from "@storybook/react";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select stories',
    component: Select,
    argTypes: {
        value: {table: {category: 'Main'}},
        items: {table: {category: 'Main'}},
        collapsed: {table: {category: 'Main'}},
        onClickCollapsed: {table: {category: 'Events'}},
        onClickItem: {table: {category: 'Events'}},
        backgroundSelectColor: {
            control: 'color',
            table: {category: 'Styles'}
        },
        backgroundValueColor: {
            control: 'color',
            table: {category: 'Styles'}
        },
        className: {table: {category: 'Styles'}},
    }
}

const onClickCollapsed = action('Click on title')
const onClickItem = action('Click on title')

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;

export const SelectOff = Template.bind({});
SelectOff.args = {
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

export const SelectOn = Template.bind({});
SelectOn.args = {
    value: {id:'', title:''},
    items: [
        {id: v1(), title: 'Vova'},
        {id: v1(), title: 'Alex'},
        {id: v1(), title: 'Dima'},
        {id: v1(), title: 'Anna'},
    ],
    collapsed: true,
    onClickCollapsed: onClickCollapsed,
    onClickItem: onClickItem
}

export const SelectOnOff = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [value, setValue] = useState<ItemType>({id:'', title:''})
    const onClickCollapsedHandler = () => setCollapsed(!collapsed)
    const onClickItemHandler = (id: string, title: string) => {
        setValue({id:id, title:title})
        setCollapsed(!collapsed)
    }
    const item: ItemType[] = [
        {id: v1(), title: 'Vova'},
        {id: v1(), title: 'Alex'},
        {id: v1(), title: 'Dima'},
        {id: v1(), title: 'Anna'},
    ]
    return <Select value={value} items={item} collapsed={collapsed} onClickCollapsed={onClickCollapsedHandler} onClickItem={onClickItemHandler}/>
}