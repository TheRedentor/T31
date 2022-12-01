// Usamos window.onload() para ejecutar la función reloj() cuando cargue el HTML
// Lo ponemos dentro de un window.setInterval() para definirle cada cuantos milisegundos ejecutar la función reloj()
window.setInterval(
    window.onload = function reloj() {
        var horas = document.getElementById("horas");
        var minutos = document.getElementById("minutos");
        var segundos = document.getElementById("segundos");
        if (new Date().getHours() < 10) {
            if (new Date().getHours() == "0") {
                horas.innerHTML = "00" + new Date().getHours();
            }
            horas.innerHTML = "0" + new Date().getHours();
        } else {
            horas.innerHTML = new Date().getHours();
        }

        if ( new Date().getMinutes() < 10) {
            if ( new Date().getMinutes() == 0) {
                minutos.innerHTML = "00";
            }
            minutos.innerHTML = "0" + new Date().getMinutes();
        } else {
            minutos.innerHTML = new Date().getMinutes();
        }

        if (new Date().getSeconds() < 10) {
            if (new Date().getSeconds() == 0) {
                segundos.innerHTML = "00";
            }
            segundos.innerHTML = "0" + new Date().getSeconds();
        } else {
            segundos.innerHTML = new Date().getSeconds();
        }
    }, 1000
)
