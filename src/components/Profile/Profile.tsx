import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img.gazeta.ru/files3/839/7947839/upload-shutterstock_109674992-pic905v-895x505-10385.jpg"
                    alt="content"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}