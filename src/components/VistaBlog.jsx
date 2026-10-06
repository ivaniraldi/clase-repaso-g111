import BlogArticle from "./BlogArticle";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function VistaBlog(){
const articulos = [
  {
    id: 1,
    titulo: "Aprendiendo React",
    categoria: "Programación",
    contenido: "React permite crear interfaces dinámicas."
  },
  {
    id: 2,
    titulo: "¿Qué es JavaScript?",
    categoria: "Programación",
    contenido: "JavaScript agrega lógica e interacción a las páginas."
  },
  {
    id: 3,
    titulo: "Mejores hábitos",
    categoria: "Vida",
    contenido: "Dormir bien ayuda a tener más energía."
  }
];

    return(
        <>
        <Navbar titulo={"DLatam Blog"}/>
        <div className="container">
        <h2>Mi blog:</h2>
        <div>
            {articulos.map((a, i)=>{
              return(
                <BlogArticle key={i} titulo={a.titulo} categoria={a.categoria} contenido={a.contenido}></BlogArticle>
              )
            })}
        </div>

        </div>
        <Footer/>
        </>
    )
}