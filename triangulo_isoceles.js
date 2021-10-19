function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    if (ladoA === ladoB &&  ladoA != ladoB && ladoBase < ladoA && ladoB) {

        const input = document.getElementById("alturaIsoceles")
        // const altura = input.value;

        const altura = Math.sqrt(ladoA**2 - ladoBase**2 / 4)
        alert(input.altura);

    } else {
       console.error("Los lados a y b no son iguales"); 
    }
}

// alturaTrianguloIsosceles();

// function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
//     if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
//         console.error("Los lados a y b no son iguales");
//     } else {
//         const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
//         const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//         const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//         const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

//         const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

//         const trianguloGrandeAltura = trianguloPequenoLadoA;
//         return trianguloGrandeAltura;
//     }
// }