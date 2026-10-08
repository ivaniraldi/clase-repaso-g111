import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

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
