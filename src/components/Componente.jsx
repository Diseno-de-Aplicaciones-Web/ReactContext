import { useContext } from "react"
import { Context } from "../App"; 


function Componente () {

    const cosas = useContext(Context);

    // Aquí nuestra lógica

    return (
        <h1>Muestro {cosas}</h1>
    )
}

export default Componente