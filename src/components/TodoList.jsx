import React, { useState } from "react";

export default function TodoList() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      title: "Lavar la loza",
      completed: false,
    },
    {
      id: 2,
      title: "Pasear al perro",
      completed: true,
    },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let nuevoObjeto = {
      id: new Date(),
      title: nuevaTarea,
      completed: false,
    };
    console.log(nuevoObjeto);
    // Spread Operator ---> copia un objeto o un arreglo.  ...objeto ...array

    if (!nuevaTarea.trim()) {
      alert("Debes escribir una tarea.");
      return;
    }

    setTareas([...tareas, nuevoObjeto]);
    setNuevaTarea("");
  }

  function completar(id) {
    console.log(id);

    // id == 1
    setTareas(
      tareas.map((t) => {
        // Si queremos modificar la tarea con id = 1 
        // el if verifica en cada elemento del recorrido si el ID es igual al que recibio la funcion
        if (t.id == id) {
          return {
            id: t.id,
            title: t.title,
            completed: !t.completed
          };
        }
        // si el id que recibe completar() no es igual al id de la tarea, lo devuelve IGUAL que como estaba para no modificar uno que no sea
        return t;
      }),
    );
  }

  return (
    <div>
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Ingresa la tarea a realizar</label>
        <br />
        <input
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          type="text"
        />
        <button type="submit">Enviar</button>
      </form>

      <section>
        <h3>Tareas:</h3>
        <div>
          {tareas.map((t, i) => {
            return (
              <p
                className={
                  t.completed == true
                    ? "text-decoration-line-through"
                    : "text-danger"
                }
                key={i}
              >
                {t.title}{" "}
                <button onClick={() => completar(t.id)}>Completar</button> 
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}
