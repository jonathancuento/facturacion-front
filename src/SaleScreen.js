import React from "react";
import { useNavigate } from "react-router-dom";
import { facturasColumns } from "./constants/facturas";
import { CustomTable } from "./CustomTable";

export const SaleScreen = ({data}) => {
  console.log(data);
  const [filterText, setFilterText] = React.useState("");
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/venta/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  const filteredFacturas = data.filter((factura) => {
      const facturaString = Object.values(factura).join(" ").toLowerCase();
      return facturaString.includes(filterText.toLowerCase());
  }) || [];

  const dataCustom = filteredFacturas.map((factura) => ({
    ...factura,
    acciones: (
        <div>
            <button
                type="button"
                class="btn btn btn-warning me-2"
                onClick={() => handleEdit(factura.numeroFactura)}
            >
                Editar
            </button>
            <button
                type="button"
                class="btn btn btn-danger"
                onClick={() => handleDelete(factura.numeroFactura)}
            >
                Eliminar
            </button>
        </div>
    ),
    }));


  return (
    <div>
      <div class="card m-2">
        <div class="card-body d-flex flex-row justify-content-between">
          <h4>Órdenes de venta</h4>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="card m-2 p-3">
        <CustomTable colums={facturasColumns} data={dataCustom} />
      </div>
    </div>
  );
};
