import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

export type PostType = {
    title: number | string;
}
type DialogItemType = {
    name: string;
    id: number;
}
const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: any) =>{
return(
    <div className={s.dialog}>{props.message}</div>
)
}



export const Dialogs = (props: any) => {

    let dialogs = [
        {id:1,name:"Maksim"},
        {id:2,name:"Dimych"},
        {id:3,name:"Tatsiana"},
        {id:4,name:"Kostya"},
        {id:5,name:"Kirillu"},
    ]

    let dialogsElements = dialogs.map(
        (m)=>{
            return( <DialogItem name={m.name} id={m.id}/>)
        }
    )

    let messages = [
        {id:1,message:"Maksim hello"},
        {id:2,message:"Dimych bye bye"},
        {id:3,message:"Tatsiana Hi"},
        {id:4,message:"Kostya privet"},
        {id:5,message:"Kirill good buy"},
    ]

    let messagesElements = messages.map((m)=>{
        return(<Message message={m.message}/>)
    })


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}