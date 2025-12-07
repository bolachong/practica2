"use client"

import Button from "./Button"
import Input from "./Input"

export default function Form(props) {
    return (
        <>
            <div>
                <Input type={props.type1} onChange={props.onChange1} placeholder={props.placeholder1} value={props.value1}></Input>
                <br></br>
                <Input type={props.type2} onChange={props.onChange2} placeholder={props.placeholder2} value={props.value2}></Input>
                <br></br>
                <Button onClick={props.onculic} text={props.text}></Button>
            </div>
        </>
    )
}