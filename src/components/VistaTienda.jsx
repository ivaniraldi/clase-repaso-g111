import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"

/// CICLO DE VIDA DE UN COMPONENTE:

// 1 - MONTAJE
// 2 - ACTUALIZACIÓN
// 3 - DESMONTAJE <--- no lo vemos importante

export default function VistaTienda() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async () => {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProducts(data.products)
        }
        getProducts()
    }, [])


  return (
    <div>
        <Navbar titulo={"DLatam Tienda"}/>
            <div className='container d-flex justify-content-center'>
                <div>
                <h3>Productos:</h3>

                <div className='row gap-2 d-flex justify-content-center'>
                    
                    {products.length > 0 ? products.map((p, i)=>{
                        return(
                            <div className='col-3 bg-light border rounded p-3 d-flex flex-column' key={i}>
                                <img src={p.images[0]} alt="" />
                                <h5>{p.title}</h5>
                                <p>${p.price}</p>
                                <p>{p.tags?.map((t)=> <p className='badge bg-warning ms-2'>{t}</p>)}</p>
                                <div className='d-flex justify-content-center'>
                                <button className='btn btn-dark'>Agregar al carrito</button>

                                </div>
                            </div>
                        )
                    }) : "Aun no hay productos para mostrar, intenta luego."}
                </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}
