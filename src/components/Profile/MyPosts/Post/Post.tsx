import React from "react";
import s from './Post.module.css';

export const Post = (props:any) => {
    return (
        <div className={s.item}>
            <img src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt="avatar"/>
            {props.message}
            <div>
            <span>like{props.like}</span>
            </div>
        </div>
    )
}