import React, {useState} from "react";
import style from './Rating.module.css'

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
};

export const Rating = () => {
 const [value, setValue] = useState<number>(0)
    const onClickStarHandler = (el:number) => setValue(el)

    return <div>
        <div className={style.star} onClick={()=>onClickStarHandler(1)}><Star selected={value >= 1}/></div>
        <div className={style.star} onClick={()=>onClickStarHandler(2)}><Star selected={value >= 2}/></div>
        <div className={style.star} onClick={()=>onClickStarHandler(3)}><Star selected={value >= 3}/></div>
        <div className={style.star} onClick={()=>onClickStarHandler(4)}><Star selected={value >= 4}/></div>
        <div className={style.star} onClick={()=>onClickStarHandler(5)}><Star selected={value >= 5}/></div>
    </div>
}

type StarPropsType = {
    selected : boolean
};

const Star = (props: StarPropsType) => {
    return <span className={`${style.span} ${props.selected ? style.spanOn : '' }`}>star</span>
};