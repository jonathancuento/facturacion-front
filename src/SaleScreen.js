import React from 'react'

export const SaleScreen = () => {
  return (
    <div>
        <div>
            {/* AQUI EL TITULO , Y LA CAJITA DE BUSCAR */}
            <h3>Listado  &nbsp;
            <button type="button" class="btn btn-outline-success">Añadir CLiente  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>
            </button>
            </h3>
           
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        <div>
            {/* PONER LOS CAMPOS QUE CORRESPONDAN */}
            <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Número de Cliente</th>
                <th scope="col">Cedula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>1805102055</td>
                <td>Mark delfigalo</td>
                <td>099983843</td>
                <td>Quito y sucre</td>
                <td>
                    <button type="button" class="btn btn-warning">Editar</button> &nbsp;
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>1805103945</td>
                <td>Jose Perez</td>
                <td>099989489</td>
                <td>12 noviembre y Cevallos</td>
                <td>
                    <button type="button" class="btn btn-warning">Editar</button> &nbsp;
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>1805103953</td>
                <td>Pedro Parker</td>
                <td>099983456</td>
                <td>7 Tratados</td>
                <td>
                    <button type="button" class="btn btn-warning">Editar</button> &nbsp;
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}
