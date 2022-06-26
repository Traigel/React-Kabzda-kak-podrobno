import React from 'react';
import {action} from '@storybook/addon-actions'
import { OnOff } from './OnOff';

export default {
    title: 'OnOff stories',
    component: OnOff,
}
export const EmptyOn  = () => <OnOff defaultOn={true}/>
export const EmptyOff  = () => <OnOff defaultOn={false}/>