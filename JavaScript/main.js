//algoritmo con un condicional while y switch.
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
}