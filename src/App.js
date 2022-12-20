import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./commons/navbar";
import { clientes } from "./constants/clientes";
import { facturas } from "./constants/facturas";
import { productos } from "./constants/productos";
import { SaleDescription } from "./SaleDescription";
import { SaleScreen } from "./SaleScreen";
import { UsersScreen } from "./UsersScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/venta/:id" element={
          <SaleDescription
            data={facturas}
            clients={clientes}
            productos={productos}/>
        } />
        <Route path="/usuarios" element={<UsersScreen />} />
        <Route path="/" element={<SaleScreen data={facturas} />} />
      </Routes>
    </div>
  );
}

export default App;
