/*function encontrarPiloto(codigo){
   return  (codigo.split(":"))
}*/

let encontrarPiloto=codigo=>codigo.split(":")
let piloto=encontrarPiloto("abc1234:ADNY OSORIO")
console.log("EL PILOTO ES:"+ piloto[1])