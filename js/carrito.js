const tablaBody = document.querySelector('#tabla-carros tbody');

document.addEventListener('DOMContentLoaded',()=>{
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoGuardado.forEach((vehiculo)=>{
        const fila = document.createElement('tr');
        const tdImagen = document.createElement('td');
        const img = document.createElement('img');
        img.setAttribute('src', vehiculo.imagen);

        const tdMarca = document.createElement('td');
        tdMarca.textContent = vehiculo.marca;

        const tdModelo = document.createElement('td');
        tdModelo.textContent = vehiculo.modelo;

        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = vehiculo.precio;

        // ENSAMBLAMOS
        fila.appendChild(tdImagen);
        tdImagen.appendChild(img);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo)
        fila.appendChild(tdPrecio);

        tablaBody.appendChild(fila);

        

    });
});