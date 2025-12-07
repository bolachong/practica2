"use client"

import Button from "./Button"
import Input from "./Input"

export default function AgendarTurno(props) {
    return (
        <>
            <h1>Agendar nuevo turno</h1>
            <Input type={Number} onChange={props.onChangeNumeroTurno} placeholder={props.placeholder}></Input>
            <br></br>
            <Button onClick={props.onClickRealizarReservaDeTurno}>Reservar turno</Button>
        </>
    )
}