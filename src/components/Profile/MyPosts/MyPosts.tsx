import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id:1,message:"Hi,how are you",like:12},
        {id:2,message:"good bye,baby",like:21}
    ]
    return (
        <div>
            My posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                {
                    postData.map((m)=>{
                        return(<Post message={m.message} like={m.like}/>)
                    })
                }
            </div>
        </div>
    )
}