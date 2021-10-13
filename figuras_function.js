//CUADRADO
console.group('Cuadrados');

const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd();


// TRIÁNGULO
console.group('Triángulos');

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) /2;
}

console.groupEnd();


//CÍRCULO
console.group('Círculos');

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//Triángulo (CORREGIR)
function calcularPerimetroTriangulo() {

    const input = document.getElementById("InputTriangulo").value;
    const value = input.value;

    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base");


    const perimetro = perimetroTriangulo(value, lado1, lado2, base);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    const input = document.getElementById("InputAreaTriangulo");
    const value = input.value;

    const perimetro = areaTriangulo(value);
    alert(perimetro);
}


//Círculo

function calcularPerimetroCírculo() {
    const input = document.getElementById("InputCírculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCírculo() {
    const input = document.getElementById("InputCírculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}