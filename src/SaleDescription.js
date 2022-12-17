import React from "react";

export const SaleDescription = () => {
  return (
    <div>
      <div>
        {/* AQUI EL TITULO , Y LA CAJITA DE BUSCAR */}
        <h3>
          Datos del Cliente &nbsp;
          <button type="button" class="btn btn-success">
            + Agregar
          </button>
          
        </h3>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      
      <br/><br/>{/* Dando espacios*/}

      <div>
        <div class="row">
          <div class="col">
            <h4>Cedula</h4>
            <input type="text" class="form-control" placeholder="103847455" />
          </div>
          <div class="col">
            <h4>Nombre</h4>
            <input
              type="text"
              class="form-control"
              placeholder="Jose Delgado"
            />
          </div>
          <div class="col">
            <h4>Telefono</h4>
            <input type="text" class="form-control" placeholder="0866786544" />
          </div>
        </div>
        <div class="col">
          <h4>Direccion</h4>
          <input type="text" class="form-control" placeholder="Quito y Sucre" />
        </div>
      </div>
      <br/><br/>{/* Dando espacios*/}
      <div>
        {/* PONER LOS CAMPOS QUE CORRESPONDAN */}
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Existencia</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Precio Total</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="text" class="form-control" placeholder="" />
              </th>
              <td>Samsung A20</td>
              <td>1</td>
              <td>
                <input type="text" class="form-control" placeholder="" />
              </td>
              <td>260.47</td>
              <td>260.47</td>
              <td>
                <button type="button" class="btn btn-success">
                  Agregar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>{/* Dando espacios*/}
      <div>
        {/* PONER LOS CAMPOS QUE CORRESPONDAN */}
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Existencia</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Precio Total</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2</th>
              <td>Samsung A20</td>
              <td>80</td>
              <td>40</td>
              <td>260.47</td>
              <td>260.47</td>
              <td>
                <button type="button" class="btn btn-success">
                  Eliminar
                </button>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal</td>
              <td>4509.73</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>IVA(12%)</td>
              <td>209.73</td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total Q</td>
              <td>4909.73</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
