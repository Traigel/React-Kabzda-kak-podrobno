import React from "react";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
};

export const Rating = (props: RatingPropsType) => {
    return <div>
        <Star selected={props.value >= 1}/>
        <Star selected={props.value >= 2}/>
        <Star selected={props.value >= 3}/>
        <Star selected={props.value >= 4}/>
        <Star selected={props.value >= 5}/>
    </div>
}

type StarPropsType = {
    selected : boolean
};

const Star = (props: StarPropsType) => {
    return props.selected ? <span><b>star </b></span> : <span>star </span>;
};