import React from 'react'
import { useForm } from "react-hook-form"

export default function Contacts() {
    const {send, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    }
    
    return (
       <div>
            <form onSuubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First Name" name="fname" ref={send}>First Name</input>
                <input type="text" placeholder="Last Name" name="fname" ref={send}>Last Name</input>
                <input type="text" placeholder="Email" name="ename" ref={send({required: true })}>Email</input>
                <input type="submit"/>
                <textarea>Enter text here</textarea>
            </form>
        </div>
    )
}
