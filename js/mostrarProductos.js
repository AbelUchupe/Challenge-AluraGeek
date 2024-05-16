import { conexionAPI } from "./conexionAPI.js";
const listar = document.querySelector ("[data-lista]");

const formulario = document.querySelector("[data-form]");
const limpiarButton = document.querySelector("[data-limpiar]");

function limpiarForm(){
    const titulo = document.querySelector("[data-nombre]");
    const imagen = document.querySelector("[data-imagen]");
    const precio = document.querySelector("[data-precio]");

    titulo.value = "";
    imagen.value ="";
    precio.value= ""
}

limpiarButton.addEventListener("click",()=>{
    limpiarForm()
});

async function enviarProducto(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;

    await conexionAPI.crearProducto(titulo,imagen,precio);
    alert("Envio exitoso...")
}

formulario.addEventListener("submit",evento =>enviarProducto(evento));

// console.log(listar);

function crearProducto (titulo,imagen,precio) {
    const producto = document.createElement("li");
    producto.className = "productos_card";
    producto.innerHTML = `<div class="producto">
                        <div class="image_container"><img src="${imagen}" alt=""></div>
                        <div class="producto_info">
                            <div><p class="titulo">${titulo}</p></div>
                            <div><p class="precio">${precio}</p><img src="" alt=""></div>
                        </div>
                        </div>`;
    return producto;
}



async function listaDeProductos() {
    const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(producto => {
        listar.appendChild(crearProducto(producto.titulo,producto.imagen,producto.Precio))
    });
}

listaDeProductos()