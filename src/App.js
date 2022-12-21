import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./commons/navbar";
import axios from "axios";
// import { clientes } from "./constants/clientes";
// import { facturas } from "./constants/facturas";
// import { productos } from "./constants/productos";
import { SaleDescription } from "./SaleDescription";
import { SaleScreen } from "./SaleScreen";
import { UsersScreen } from "./UsersScreen";

const baseURL = "http://localhost:3001/api";

function App() {
  const [clientes, setClientes] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/bills`).then((response) => {
      // console.log('bills', response.data);
      setFacturas(response.data.data);
    });
    axios.get(`${baseURL}/products`).then((response) => {
      // console.log('products', response.data);
      setProductos(response.data.data);
    });
    axios.get(`${baseURL}/clients`).then((response) => {
      // console.log('clients', response.data);
      setClientes(response.data.data);
    });
  }, []);

  console.log("clientes", clientes);
  console.log("facturas", facturas);
  console.log("productos", productos);
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
