import { Route, Routes } from "react-router-dom";
import "./App.css";
import VistaBlog from "./views/VistaBlog";
import VistaDetalle from "./views/VistaDetalle";
import VistaLogin from "./views/VistaLogin";
import VistaTienda from "./views/VistaTienda";
import VistaToDo from "./views/VistaToDo";
import VistaNotFound from "./views/VistaNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VistaLogin />} />
        <Route path="/detalle/1" element={<VistaDetalle />} />
        <Route path="/todo" element={<VistaToDo />} />
        <Route path="/blog" element={<VistaBlog />} />
        <Route path="/tienda" element={<VistaTienda />} />
        <Route path="/404" element={<VistaNotFound/>} />
        <Route path="*" element={<VistaNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
