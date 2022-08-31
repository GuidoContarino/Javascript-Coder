
let precio, resultado, opcionDePago, opcionValida=0;

const calcular = (precio,opcion) => {
    resultado = precio*opcion;
}

precio = parseInt(prompt("Ingrese la cantidad de dolares a convertir en Pesos Argentinos"));

opcionDePago = parseInt(prompt(`Ingresa el tipo de dolar a converir:
1- Dolar Oficial
2- Dolar Blue
3- Dolar Mayorista 
4- Dolar Turista` 
));

while(opcionValida===0) {
    switch(opcionDePago){
        case 1: {
            calcular(precio,137);
            alert(`El cambio de Dolar a Peso en Dolar Oficial es ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        case 2: {
            calcular(precio,286);
            alert(`El cambio de Dolar a Peso en Dolar Blue es ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        case 3: {
            calcular(precio,138.53);
            alert(`El cambio de Dolar a Peso en Dolar Mayorista es ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        case 4: {
            calcular(precio,253.75);
            alert(`El cambio de Dolar a Peso en Dolar Turista es ${resultado} pesos`);
            opcionValida=1;
            break;
        }
        default: {
            alert("Opción inválida");
        }
    }
}