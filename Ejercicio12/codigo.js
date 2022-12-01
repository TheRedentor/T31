function validarFecha(fecha) {
    var pattern = /([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)([0-2][0-9][0-9][0-9])/;
    console.log(pattern.test("Nací el " + fecha + " en Donostia."));
};

validarFecha("05/04/1982");

function validarCorreo(email) {
    var pattern = /\w+([.-]?\w+)*@\w*(\.\w{2,3})/;
    console.log(pattern.test(email));
};

validarCorreo("joel.del@hotmail.cat");

function invertirNombre(nombre) {
    console.log(nombre.replace(/([a-zA-Z]*) ([a-zA-Z]*)/, "$2, $1"));
};

invertirNombre("Pepe Viyuela");

function borrarEtiquetas(texto) {
    console.log(texto.replace(/<[^>]?[\w\s]*>/g, ""));
}

borrarEtiquetas("Esto es una etiqueta <script></script> que debe ser borrada")