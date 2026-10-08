import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function VistaNotFound() {
    const navigate = useNavigate()
  return (
    <div>Página no encontrada
        <button onClick={()=> navigate("/tienda")}> volver </button>
    </div>
  )
}
