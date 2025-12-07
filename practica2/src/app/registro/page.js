"use client"

import Form from "@/components/Form"
import Button from "@/components/Button"
import Input from "@/components/Input"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Registro() {
    const router = useRouter()
    const [user, setUser] = useState("")
    const [alumno, setAlumno] = useState("")


    function corroba1(event){
        setUser(event.target.value)
        console.log(user)
    }

    function corroba2(event){
        setAlumno(event.target.value)
        console.log(alumno)
    }

    function registrar(){
        if (user.length < 4) {
            alert ("AHHHHHHHHHHHHHHHHHHH")
        }
    }

    function nose() {
        console.log(user)
    }
    
    


    return (
        <>
            <Form
                placeholder1="Username"
                placeholder2="AlumnoId"
                text="Ir a turnos"
                onChange1={corroba1}
                onChange2={corroba2}
                onculic={nose}
            ></Form>
        </>
    )
}