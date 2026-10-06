import Footer from "./Footer";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

export default function VistaToDo() {
  return (
    <div className="template">
      <Navbar titulo={"DLatam Lista de tareas"} />

      <div className="container flex-1">
        <TodoList />
      </div>

      <Footer />
    </div>
  );
}
