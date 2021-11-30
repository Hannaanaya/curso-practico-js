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

// TRIÁNGULO ISÓCELES
function alturaTrianguloIsoceles(ladoA, ladoB, ladoBase) {
    if (ladoA === ladoB) {
        const altura = Math.sqrt(ladoA**2 - ladoBase**2 / 4)
        return altura;
    } else {
        alert("Las medidas están mal")
    }
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
    if (" ") {
        const noResult = document.getElementById("noResult");
        noResult.innerText = "NO SE HA INTRODUCIDO NINGÚN NÚMERO";
    }

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro); 

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


//Triángulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1")
    const Lado1Value = inputLado1.value;
    
    const inputLado2 = document.getElementById("InputLado2")
    const Lado2Value = inputLado2.value;

    const inputBase = document.getElementById("InputBaseP")
    const baseValue = inputBase.value;

    const perimetro = perimetroTriangulo(Lado1Value, Lado2Value, baseValue);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const baseValue = inputBase.value;

    const inputAltura = document.getElementById("InputAltura");
    const alturaValue = inputAltura.value;

    const area = areaTriangulo(baseValue, alturaValue);
    alert(area);
}

//Triángulo Isóceles
function calcularAlturaTriangulo() {

    const inputLadoA = document.getElementById("IsocelesLadoA")
    const LadoaValue = inputLadoA.value;

    const inputLadoB = document.getElementById("IsocelesLadoB")
    const LadobValue = inputLadoB.value;

    const inputBase = document.getElementById("IsocelesBase")
    const baseValue = inputBase.value;

    const alturaTriangulo = alturaTrianguloIsoceles(LadoaValue, LadobValue, baseValue);


    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Altura: " + alturaTriangulo;

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