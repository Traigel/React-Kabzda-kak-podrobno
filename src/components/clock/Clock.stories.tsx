import React from "react";
import { Clock } from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Clock',
    component: Clock,
    argTypes: {
        mode: {
            description: 'what clock: analog, digital',
            table: {category: 'Main'}
        }
    }
}  as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const DigitalClock = Template.bind({});
DigitalClock.args = {
    mode: 'digital'
};

export const AnalogClock = Template.bind({});
AnalogClock.args = {
    mode: 'analog'
};