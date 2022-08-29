/*algoritmo con un condicional while y switch.
let entrada = prompt("Ingrese Su Nombre");
//algoritmo que finaliza cuando se presione ESC.
while (entrada != "esc") {
    switch (entrada){
        case "Guido":
            alert ("Bienvenido " + entrada)
            break;
        case "Santiago":
            alert ("Bienvenido " + entrada)
            break;
        case "Lucas":
            alert ("Bienvenido " + entrada)
            break;
        case "Maria":
            alert ("Bienvenida " + entrada)
            break;
        case "Martina":
            alert ("Bienvenida " + entrada)
            break;
        case "Agustina":
            alert ("Bienvenida " + entrada)
            break;
        default:
            alert("Su nombre no a sido registrado")
            break;
    }
    entrada = prompt ("ingrese su nombre");
    porcentaje = prompt("Ingrese el tiempo trabajado");
    porcentaje = parseInt(porcentaje);
    if (porcentaje > 49){
        alert(entrada + " Ya has finalizado su trabajo por hoy");
    }else{
        alert(entrada + " Usted no finalizo su trabajo");
    }
}*/

function convertir(){
    var valor = parseInt(document.getElementById("valor").value);
    var Resultado = 0;
    var Dolar = 138.31;
    var Euro = 138.22;
    if(document.getElementById("uno").Checked){
        Resultado = valor * Dolar;
        alert("El cambio de Pesos a Dolares es: $" + Resultado)
    }
    else if (document.getElementById("dos").Checked){
        Resultado = valor * Euro;
        alert("El cambio de Pesos a Euros es: $" + Resultado)
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}