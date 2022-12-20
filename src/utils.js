export const getObjectById = (objects, key, id) => {
    console.log({objects, key, id})
    console.log()
    return objects.find((object) => {
        return String(object[key]) === String(id)
    });
};

export const calcTotal = (productos) => {
    return productos.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0);
  };
  
 export const calcTotalProductos = (productos) => {
    return productos.reduce((acc, producto) => {
      return acc + producto.cantidad;
    }, 0);
  };