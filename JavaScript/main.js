
function convertir(){
    var valor = parseFloat(document.getElementById("valor").value);
    var Resultado = 0;
    var Dolar = 138.31;
    var Euro = 138.22;
    if(document.getElementById("uno").checked){
        Resultado = valor * Dolar;
        alert("El cambio de Pesos a Dolares es: $" + Resultado)
    }
    else if (document.getElementById("dos").checked){
        Resultado = valor * Euro;
        alert("El cambio de Pesos a Euros es: $" + Resultado)
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}
