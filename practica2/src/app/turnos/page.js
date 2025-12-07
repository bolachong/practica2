"use client"

import TurnosC from "@/components/Turnos"
import { useSocket } from "@/hooks/useSocket"
import { useEffect } from "react";

export default function Turnos() {

    const {socket, isConnected} = useSocket();



    socket.on("pingAll", (data) => {
        console.log(data);
    });

    return(
        <>
            <h1>Socket funcionando</h1>
        </>
    )
}