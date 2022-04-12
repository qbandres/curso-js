console.log("Hello world")
//Perimetro de un cuadrado
console.group("Cuadrados");

const ladocuadrado = 5;
console.log("Los lados del cuadrado miden :" + ladocuadrado + " mts")

const perimetroCuadrado = ladocuadrado*4;
console.log("El perimetro del cuadrado es : "+ perimetroCuadrado + " mts");

const areaCuadrado = ladocuadrado*ladocuadrado;
console.log("El área del cuadrado es : "+areaCuadrado +" m2")

console.groupEnd()

// Código Triangulo
console.group("Triangulo");


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 =8;

console.log("Los lados del triangulo miden "+ladoTriangulo1+" cm, "+ladoTriangulo2+" cm, "+ladoTriangulo3+" cm, ")

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3
console.log("El perimetro del triangulo es : "+ perimetroTriangulo + " cm")

const areaTraingulo = Math.sqrt(perimetroTriangulo*(perimetroTriangulo-ladoTriangulo1)*(perimetroTriangulo-ladoTriangulo2)*(perimetroTriangulo-ladoTriangulo3))
console.log("El área del Triangulo es : "+areaTraingulo+" cm2")

console.groupEnd()
