let producto = {
    nombre: "Zapato deportivo",
    precio: 5000,
    enOferta: true
};

if (producto.enOferta) {
    console.log(`${producto.nombre} está en oferta! Precio: $${producto.precio}`);
} else {
    console.log(`${producto.nombre} no está en oferta.`);
}

let inventario = [
    { nombre: "Zapato deportivo", precio: 5000 },
    { nombre: "Sandalia", precio: 3000 },
    { nombre: "Botín", precio: 7000 }
];

for (let i = 0; i < inventario.length; i++) {
    console.log(`Producto: ${inventario[i].nombre} - Precio: $${inventario[i].precio}`);
}

let seleccion = prompt("¿Qué zapato deseas comprar? Ingresa el número:\n1. Zapato deportivo\n2. Sandalia\n3. Botín");
let productoSeleccionado;

switch (seleccion) {
    case '1':
        productoSeleccionado = { nombre: "Zapato deportivo", precio: 5000 };
        break;
    case '2':
        productoSeleccionado = { nombre: "Sandalia", precio: 3000 };
        break;
    case '3':
        productoSeleccionado = { nombre: "Botín", precio: 7000 };
        break;
    default:
        alert("Opción inválida.");
}

if (productoSeleccionado) {
    alert(`Has seleccionado: ${productoSeleccionado.nombre} - Precio: $${productoSeleccionado.precio}`);
}

let carrito = [
    { nombre: "Zapato deportivo", precio: 5000 },
    { nombre: "Sandalia", precio: 3000 }
];

let total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(`El total de tu compra es: $${total}`);

let montoTotal = 10000;
let cuotas = 3;

let pagoPorCuota = montoTotal / cuotas;
console.log(`Monto total: $${montoTotal}`);
console.log(`Pagos en ${cuotas} cuotas de: $${pagoPorCuota.toFixed(2)}`);
