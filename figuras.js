//CUADRADO
console.group('Cuadrados');

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('Perímetro: ' + perimetroCuadrado + 'cm')

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('Área: ' + areaCuadrado + 'cm')

console.groupEnd();


// TRIÁNGULO
console.group('Triángulos');

const triánguloLado1 = 6;
const triánguloLado2 = 6;
const baseTriángulo = 4;

console.log(
    'Los lados del triángulo miden: ' + 
    triánguloLado1 + 'cm, ' + 
    triánguloLado2 + 'cm, ' + 
    baseTriángulo + 'cm'
);
const alturaTriangulo = 5.5;
console.log('La altura del triángulo es de: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = triánguloLado1 + triánguloLado2 + baseTriángulo;
console.log('Perímetro: ' + perimetroTriangulo + 'cm')

const areaTriangulo = (baseTriángulo * alturaTriangulo) / 2;
console.log('Área: ' + areaTriangulo + 'cm^2')

console.groupEnd();


//CÍRCULO
console.group('Círculos');

//Radio
const radioCirculo = 4;
console.log('Radio del círculo: ' + radioCirculo + 'cm')

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('Diámetro: ' + diametroCirculo + 'cm')

//PI
const PI = Math.PI;
console.log('PI: ' + PI)

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('Perímetro: ' + perimetroCirculo + 'cm')

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('Área: ' + areaCirculo + 'cm^2')

console.groupEnd();