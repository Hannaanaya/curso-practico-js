function alturaTrianguloIsoceles(ladoA, ladoB, ladoBase) {
    if (ladoA === ladoB) {
        const altura = Math.sqrt(ladoA**2 - ladoBase**2 / 4)
        return altura;
    } else {
        alert("Las medidas están mal")
    }
    
}

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