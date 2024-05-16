async function listarProductos (){
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = await conexion.json();

    return conexionConvertida
    // console.log(conexionConvertida);
}

async function crearProducto(titulo,imagen,precio) {
    const conexion = await fetch ("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-type" : "application/json"},
        body: JSON.stringify({
            titulo: titulo,
            imagen: imagen,
            Precio: `$ ${precio}`
        })
    })

    const conexionConvertida = await conexion.json();
    return conexionConvertida
}




export const conexionAPI = {
    listarProductos,crearProducto
}