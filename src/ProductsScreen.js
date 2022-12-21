import React from 'react'
import { productosColumns } from './constants/productos';
import { CustomTable } from './CustomTable';

export const ProductsScreen = ({data}) => {
  const [filterText, setFilterText] = React.useState("");
  const filteredData = data.filter((element) => {
    const facturaString = Object.values(element).join(" ").toLowerCase();
    return facturaString.includes(filterText.toLowerCase());
}) || [];
  return (
    <div>
      <div class="card m-2">
        <div class="card-body d-flex flex-row justify-content-between">
          <div className="d-flex flex-row">
            <h4>Productos</h4>
          </div>
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
        <CustomTable colums={productosColumns} data={filteredData} />
      </div>
    </div>
  );
}
