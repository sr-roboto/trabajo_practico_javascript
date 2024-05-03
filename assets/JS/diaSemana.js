function diaSemana( ) {
    let dia = document.forms["formDia"]["nroDia"].value;
    switch (dia) {
        case 1:
            dia = "LUNES"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        case 2:
            dia = "MARTES"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        case 3:
            dia = "MIERCOLES"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        case 4:
            dia = "JUEVES"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        case 5:
            dia = "VIERNES"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        case 6:
            dia = "SABADO"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        case 7:
            dia = "DOMINGO"
            document.write(`Usted ha elegido el dia: ${dia}`)
            break;
        default:
            document.write(`Ingrese un numero valido`)
            break;
    }
}

