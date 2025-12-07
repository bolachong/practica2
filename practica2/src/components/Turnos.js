"use client"

export default function TurnosC(props) {
    return (
        <>
            <label>
                Especialidad medica actual:
            </label>
            <p>{props.especialidad}</p>
            <br></br>
            <label>
                Número de turno actual:
            </label>
            <p>{props.turnoActual}</p>
            <br></br>
            <label>
                Nombre del paciente actual:
            </label>
            <p>{props.pacienteActual}</p>
            <br></br>
            <label>
                Cantidad de turnos reservados:
            </label>
            <p>{props.cantidadReservas}</p>
            <br></br>
            
            
        </>
    )
}