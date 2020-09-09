let lista = [],
    cadena = "",
    contador = 4,
    bandera = false,
    bandera2 = false,
    adiviniza = "",
    ganaste = "",
    intento = "";

const adiviniza1 = "Soy del color de mi raza rico, caliente, espumoso, y en compañía de un bizcocho ya verás que sabroso.",
    adiviniza2 = "etalocohc ",
    adivinizaAcertada = "¡¡¡ Felicidades ganaste!!!";

function adivinar() {

    event.preventDefault();
    let elemento = document.getElementById('txtNombre');
    let cadena = elemento.value;
    cadena = cadena.toLowerCase();

    if (contador > 0 && bandera != true) {
        if (cadena === "chocolate") {
            bandera = true;
            document.getElementById('lista').innerHTML = adiviniza;
        }
        else {
            contador -= 1;
            console.log(contador)
            if (contador === 2) {
                adiviniza += "<p><b>" + "PISTA 2" + "</b></p>" + "<p>" + adiviniza1 + "</p>" + "<hr>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
            else if (contador === 1) {
                adiviniza += "<p><b>" + "PISTA 3" + "</b></p>" + "<p>" + adiviniza2 + "</p>" + "<hr>"
                document.getElementById('lista').innerHTML = adiviniza;
            }
        }
    }

    if (bandera == true && bandera2 == false) {
        ganaste += "<h2>" + adivinizaAcertada + "</h2>"
        document.getElementById('felicidades').innerHTML = ganaste;
        bandera2 = true;
    }

    if (contador == 0 ) {
        intento = "<h3> SE TE ACABARON LOS INTENTOS </h3>"
        document.getElementById('intentos').innerHTML = intento;
    }
    else {
        intento = "<br><p> Le quedan " + contador + " intentos.</p>"
        document.getElementById('intentos').innerHTML = intento;
        bandera2 = true;
    }
}
