function borrar() {
    document.getElementById("borrar").value="";
}

function funcionTotal() {
    let unidades = document.getElementById("cantidadticket").value;
    let tipo = document.getElementById("categoria");
    let categorias = tipo.options[tipo.selectedIndex].text;
    let valor = 0;
    let entrada = 200;
    let descEst = 0.2
    let descTrai = 0.5
    let descJun = 0.85

    if (isNaN(unidades)){
        alert("Ingrese cantidad");
    }else{
        switch (categorias) {
            case "Estudiante":
                valor= unidades*entrada*descEst;
                document.getElementById("montoTotal").innerHTML=valor;
                break;
            case "Trainee":
                valor = unidades*entrada*descTrai;
                 document.getElementById("montoTotal").innerHTML=valor;
                break;
            case "Junior":
                valor = unidades*entrada*descJun;
                document.getElementById("montoTotal").innerHTML=valor;
                break;
            default:
                break;
        }
   }
}