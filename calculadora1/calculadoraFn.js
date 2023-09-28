//Traemos los elementos de nuestro HTML

const pantalla = document.getElementById('pantalla');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
let resultado = 0;

//Funciones

function suma() {
    let valorNumero1 = parseFloat(numero1.value);
    let valorNumero2 = parseFloat(numero2.value);

    if (!valorNumero1 == '' || valorNumero2 == '') {
        resultado = valorNumero1 + valorNumero2;
        pantalla.textContent = resultado;
        numero1.value = '';
        numero2.value = '';
    } else {
        alert('Ingresar valores numéricos válidos.');
    }
}

function resta() {
    let valorNumero1 = parseFloat(numero1.value);
    let valorNumero2 = parseFloat(numero2.value);

    if (!valorNumero1 == '' || valorNumero2 == '') {
        resultado = valorNumero1 - valorNumero2;
        pantalla.textContent = resultado;
        numero1.value = '';
        numero2.value = '';
    }
}

function multiplicacion() {
    let valorNumero1 = parseFloat(numero1.value);
    let valorNumero2 = parseFloat(numero2.value);

    if (!valorNumero1 == '' || valorNumero2 == '') {
        resultado = valorNumero1 * valorNumero2;
        pantalla.textContent = resultado;
        numero1.value = '';
        numero2.value = '';
    }
}

function division() {
    let valorNumero1 = parseFloat(numero1.value);
    let valorNumero2 = parseFloat(numero2.value);

    if (!valorNumero1 == '' || valorNumero2 == '') {
        resultado = valorNumero1 / valorNumero2;
        pantalla.textContent = resultado;
        numero1.value = '';
        numero2.value = '';
    }
}