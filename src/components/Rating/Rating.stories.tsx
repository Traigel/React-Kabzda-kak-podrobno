import React from 'react';
import {Rating} from './Rating'

export default {
    title: 'Rating stories',
    component: Rating,
}
export const EmptyRating = () => <Rating/>
export const Rating3 = () => <Rating defaultValue={3}/>
export const Rating5 = () => <Rating defaultValue={5}/>