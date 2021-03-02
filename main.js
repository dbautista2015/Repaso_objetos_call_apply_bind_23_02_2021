/*
Crear una función que revisa x cantidad de numeros enviados por this y mostrar el numero mayor de ellos. 
si alguno de los numeros es mayor o igual a 5 
realiza todas las operaciones matemáticas
 */
const comparar = function(p1,p2){
    let com = `Los números ingresados son ${this.n1}, ${this.n2}, ${this.n3}\n`;
    com += `Los números ingresados son ${p1} y ${p2}`;
    if(this.n1>=5 || this.n2>=5 || this.n3>=5 || p1>=5 || p2>=5){
        suma = this.n1 + this.n2 + this.n3 + p1 + p2;
        console.log(`La suma es ${suma}`);
        resta = (this.n1+ this.n2 + this.n3)-(p1+p2);
        console.log(`La resta es ${resta}`);
        multi = (this.n1 + this.n2 + this.n3)*(p1+p2);
        console.log(`La multiplicación es ${multi}`);
        divi = (this.n1 + this.n2 + this.n3)/(p1+p2);
        console.log(`La división es ${divi}`);
    }
    console.log(com);
}
const datos = new Object({
    n1 : 3,
    n2 : 2,
    n3 : 4

});
comparar.call(datos, 4, 6);

// const saludar = function(p1, p2) {
//      let cadena = `Hola ${this.name} como estas te saluda ${this.maquina} ${this.mensaje}\n`;
//      cadena += `Hola ${p1} como estas te saluda ${p2}`;
//      console.log(cadena);
// }
// const data = new Object({
//     name : "Diana",
//     maquina : "cortana",
//     mensaje : ":D"
// });
// //console.log("que paso");
// saludar.call(data, "Adrian", "Siri");
// const arg = ["Adrian", "Siri"];
// saludar.apply(data,arg);
// const mostrar = saludar.bind(data);
// console.warn("Mostrar variable mostrar con el bind");
// mostrar("Diana", "OK Google");