export const facturas = [
    {
        id: 1,
        numeroFactura: 1,
        fecha: '2021-05-10',
        cliente: 'Mark delfigalo',
        cedulaCliente: '1805102055',
        vendedor: 'ADMIN',
        estado: 'Pendiente',
        subtotal: 260.47,
        iva: 20.00,
        total: 280.47,
        articulos: [
            {
                id: 1,
                codigo: 1,
                descripcion: 'Samsung A20',
                existencia: 80,
                cantidad: 40,
                precio: 260.47,
                precioTotal: 4212.47,
            },
        ],
    },
    {
        id: 2,
        numeroFactura: 2,
        fecha: '2021-05-11',
        cliente: 'Juan Perez',
        cedulaCliente: '1805103945',
        vendedor: 'ADMIN',
        estado: 'Pagado',
        subtotal: 260.47,
        iva: 20.00,
        total: 280.47,
        articulos: [
            {
                id: 2,
                codigo: 2,
                descripcion: 'Xiaomi Redmi Note 9',
                existencia: 10,
                cantidad: 20,
                precio: 212.47,
                precioTotal: 32124.12,
            },
            {
                id: 3,
                codigo: 3,
                descripcion: 'Iphone 12',
                existencia: 2,
                cantidad: 2,
                precio: 1023.47,
                precioTotal: 2000.00,
            }
        ],
    },
    {
        id: 3,
        numeroFactura: 3,
        fecha: '2021-05-11',
        cliente: 'Juan Perez',
        cedulaCliente: '1805103945',
        vendedor: 'ADMIN',
        estado: 'Pagado',
        subtotal: 260.47,
        iva: 20.00,
        total: 280.47,
        articulos: [
            {
                id: 2,
                codigo: 2,
                descripcion: 'Xiaomi Redmi Note 9',
                existencia: 10,
                cantidad: 20,
                precio: 212.47,
                precioTotal: 32124.12,
            },
            {
                id: 3,
                codigo: 3,
                descripcion: 'Iphone 12',
                existencia: 2,
                cantidad: 2,
                precio: 1023.47,
                precioTotal: 2000.00,
            }
        ],
    },
    {
        id: 4,
        numeroFactura: 4,
        fecha: '2021-05-11',
        cliente: 'Juan Perez',
        cedulaCliente: '1805103945',
        vendedor: 'ADMIN',
        estado: 'Pendiente',
        subtotal: 260.47,
        iva: 20.00,
        total: 280.47,
        articulos: [
            {
                id: 2,
                codigo: 2,
                descripcion: 'Xiaomi Redmi Note 9',
                existencia: 10,
                cantidad: 20,
                precio: 212.47,
                precioTotal: 32124.12,
            },
            {
                id: 3,
                codigo: 3,
                descripcion: 'Iphone 12',
                existencia: 2,
                cantidad: 2,
                precio: 1023.47,
                precioTotal: 2000.00,
            }
        ],
    },
    {
        id: 5,
        numeroFactura: 5,
        fecha: '2021-05-11',
        cliente: 'Juan Perez',
        cedulaCliente: '1805103945',
        vendedor: 'ADMIN',
        estado: 'Pagado',
        subtotal: 260.47,
        iva: 20.00,
        total: 280.47,
        articulos: [
            {
                id: 2,
                codigo: 2,
                descripcion: 'Xiaomi Redmi Note 9',
                existencia: 10,
                cantidad: 20,
                precio: 212.47,
                precioTotal: 32124.12,
            },
            {
                id: 3,
                codigo: 3,
                descripcion: 'Iphone 12',
                existencia: 2,
                cantidad: 2,
                precio: 1023.47,
                precioTotal: 2000.00,
            }
        ],
    },
    {
        id: 6,
        numeroFactura: 6,
        fecha: '2021-05-11',
        cliente: 'Juan Perez',
        cedulaCliente: '1805103945',
        vendedor: 'ADMIN',
        estado: 'Pendiente',
        subtotal: 260.47,
        iva: 20.00,
        total: 280.47,
        articulos: [
            {
                id: 2,
                codigo: 2,
                descripcion: 'Xiaomi Redmi Note 9',
                existencia: 10,
                cantidad: 20,
                precio: 212.47,
                precioTotal: 32124.12,
            },
            {
                id: 3,
                codigo: 3,
                descripcion: 'Iphone 12',
                existencia: 2,
                cantidad: 2,
                precio: 1023.47,
                precioTotal: 2000.00,
            }
        ],
    },
]

export const facturasColumns = [
    {
        id: 'numeroFactura',
        label: 'Numero de Factura',
    },
    {
        id: 'fecha',
        label: 'Fecha',
    },
    {
        id: 'cliente',
        label: 'Cliente',
    },
    {
        id: 'vendedor',
        label: 'Vendedor',
    },
    {
        id: 'estado',
        label: 'Estado',
    },
    {
        id: 'total',
        label: 'Total',
    },
    {
        id: 'acciones',
        label: 'Acciones',
    },
];

export const productosFacturaColumns = [
    {
        id: 'codigo',
        label: 'Código',
    },
    {
        id: 'descripcion',
        label: 'Descripción',
    },
    {
        id: 'existencia',
        label: 'Existencia',
    },
    {
        id: 'cantidad',
        label: 'Cantidad',
    },
    {
        id: 'precio',
        label: 'Precio',
    },
    {
        id: 'precioTotal',
        label: 'Precio Total',
    },
    {
        id: 'acciones',
        label: 'Acciones',
    }
];

