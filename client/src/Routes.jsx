import React from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm"
import Chat from "./Chat"
import { UserContext } from "./UserContext.jsx";
import {useContext} from "react"
export default function Routes(){

    const {username,id}= useContext(UserContext);
    if(username){
       return <Chat/>
    }
    return (
        <RegisterAndLoginForm/>

    );
}