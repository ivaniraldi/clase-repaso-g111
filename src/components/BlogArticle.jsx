export default function BlogArticle(props){
    return(
        <section className="bg-light mb-2 p-2 border rounded">
            <h3>{props.titulo}</h3>
            <p>{props.contenido}</p>
            <p className={ props.categoria == "Programación" ? "text-success" : "text-danger" } >Categoria: {props.categoria}</p>
        </section>
    )
}