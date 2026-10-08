import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function VistaDetalle() {
    const [prod, setProd] = useState(false)
    
    useEffect(()=>{
        const getProduct = async () => {
            const res = await fetch("https://dummyjson.com/products/1")
            const data = await res.json()
            setProd(data)
        }
        getProduct()
    },[])

  return (
    <div>
        <Navbar titulo={"DLatam Tienda"}/>
        <div className='container'>
            <div className='d-flex bg-light rounded border p-3'>
               {prod !== false ?  <>
                <div className='' style={{borderRight: "1px solid lightgray"} }>
                    <img style={{width:"400px"}} src={prod.images[0]} alt=""  />
                </div>
                <div className='ms-3'>
                    <h3>{prod.title}</h3>
                    <p>{prod.description}</p>
                    <p>Categoria: {prod.category}</p>
                    <p>Envio: {prod.shippingInformation}</p>

                    <h2>${prod.price}</h2>
                    <button className='btn btn-dark my-3'>Agregar al carrito</button>
                </div>
                </> : <p>Cargando producto...</p>}
            </div>

        </div>
        <Footer/>
    </div>
  )
}
