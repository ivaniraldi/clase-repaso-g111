import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login (){
    //useState
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("Email: " + email, "Password: " + pass)
        if(email.trim() == false || !pass.trim()){
            alert("El email o la contraseña son necesarios.")
            return
        }
        if(pass.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres.")
            return
        }

        alert("Iniciaste sesión!")
        navigate("/tienda")
        return
    }

    return(
        <>
        <form onSubmit={(e)=>{handleSubmit(e)}} className=" container mx-5 bg-light p-4 border rounded mb-3 d-flex flex-column" action="submit">
            <label htmlFor="">Ingrese su email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="my-3" type="email" name="" id="" required/>
            <label htmlFor="">Ingrese su contraseña</label>
            <input value={pass} onChange={(e)=>{setPass(e.target.value)}} className="my-3" type="password" name="" id="" required/>
            <button className="btn btn-success" type="submit">Iniciar sesión</button>
        </form>
        </>
    )
}