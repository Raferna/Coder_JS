//Distribución de especialistas en consultorio médico

class especialidad {
    constructor (nombre,num_cons,horas_dia,horas_tarde){
        this.nombre = nombre;
        this.num_cons = num_cons;
        this.horas_dia = horas_dia;
        this.horas_tarde = horas_tarde;
    }

    // //Calcula el total de horas trabajadas en el día
    totalHoras (especialidad){
        return (this.horas_dia + this.horas_tarde)
    }

    // //Calcula paga del profesional por el día
    paga (especialidad){
        return (150 * (this.horas_dia + this.horas_tarde))
    }

    // //Informa en qué consultorio atiende cada especialista
    consultorio (especialidad){
        return (this.num_cons)
    }
}

// const cardio = new especialidad("Cardio","6", 3, 7);
// const gineco = new especialidad("Gineco","5", 3, 8);
// const trauma = new especialidad("Traumato","4", 4, 2);
// const clinico = new especialidad("Clínico","3", 4, 6);
// const eco = new especialidad("Ecografía","2", 0, 3);
// const oftalmo = new especialidad("Oftalmo","1", 4, 8);

// // let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");

// // //Resultados para alerts
//     total_cardio = cardio.totalHoras()
//     total_gineco = gineco.totalHoras()
//     total_trauma = trauma.totalHoras()
//     total_clinico = clinico.totalHoras()
//     total_eco = eco.totalHoras()
//     total_oftalmo = oftalmo.totalHoras()

//     paga_cardio = cardio.paga()
//     paga_gineco = gineco.paga()
//     paga_trauma = trauma.paga()
//     paga_clinico = clinico.paga()
//     paga_eco = eco.paga()
//     paga_oftalmo = oftalmo.paga()

//     consultorio_cardio = cardio.consultorio()
//     consultorio_gineco = gineco.consultorio()
//     consultorio_trauma = trauma.consultorio()
//     consultorio_clinico = clinico.consultorio()
//     consultorio_eco = eco.consultorio()
//     consultorio_oftalmo = oftalmo.consultorio()


// if (consulta == "total de horas cardio" || consulta == "total cardio"){
//     alert("Total de " + total_cardio + " horas en el día");

//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "paga cardio"){
//     alert("Paga de $"+ paga_cardio + " por el día");
    
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "consultorio cardio"){
//     alert("Ésta especialidad atiende en el consultorio " + consultorio_cardio);
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }


// else if (consulta == "total de horas gineco" || consulta == "total gineco"){
//     alert("Total de " + total_gineco + " horas en el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "paga gineco"){
//     alert("Paga de $"+ paga_gineco + " por el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "consultorio gineco"){
//     alert("Ésta especialidad atiende en el consultorio " + consultorio_gineco);
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }


// else if (consulta == "total de horas trauma" || consulta == "total trauma"){
//     alert("Total de " + total_trauma + " horas en el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "paga trauma"){
//     alert("Paga de $"+ paga_trauma + " por el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "consultorio trauma"){
//     alert("Ésta especialidad atiende en el consultorio " + consultorio_trauma);
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }


// else if (consulta == "total de horas clínico" || consulta == "total clínico" || consulta == "total de horas clinico" || consulta == "total clinico"){
//     alert("Total de " + total_clinico + " horas en el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "paga clínico" || consulta == "paga clínico"){
//     alert("Paga de $"+ paga_eco + " por el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "consultorio clínico" || consulta == "consultorio clínico"){
//     alert("Ésta especialidad atiende en el consultorio " + consultorio_clinico);
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }


// else if (consulta == "total de horas eco" || consulta == "total eco"){
//     alert("Total de " + total_eco + " horas en el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "paga eco"){
//     alert("Paga de $"+ paga_eco + " por el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "consultorio eco"){
//     alert("Ésta especialidad atiende en el consultorio " + consultorio_eco);
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }


// else if (consulta == "total de horas oftalmo" || consulta == "total oftalmo"){
//     alert("Total de " + total_oftalmo + " horas en el día");
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }
// else if (consulta == "paga oftalmo"){
//     alert("Paga de $"+ paga_oftalmo + " por el día");
// }
// else if (consulta == "consultorio oftalmo"){
//     alert("Ésta especialidad atiende en el consultorio " + consultorio_oftalmo);
//     let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");
// }

// else {
//     alert("Error. Recargue la página e inicie de nuevo.");
// }


const especialidades = [
    {Nombre: "Cardiología", Consultorio: "6",Horas_dia: 0, Horas_tarde: 7},
    {Nombre: "Ginecología", Consultorio: "5",Horas_dia: 0, Horas_tarde: 8},
    {Nombre: "Traumatología", Consultorio: "4",Horas_dia: 4, Horas_tarde: 0},
    {Nombre: "Clínica Médica", Consultorio: "3",Horas_dia: 4, Horas_tarde: 6},
    {Nombre: "Ecografía", Consultorio: "2",Horas_dia: 0, Horas_tarde: 3},
    {Nombre: "Oftalmología", Consultorio: "1",Horas_dia: 4, Horas_tarde: 8}];

const mañanas_libres = especialidades.filter((el) => el.Horas_dia === 0)
const tardes_libres = especialidades.filter((el) => el.Horas_tarde === 0)
const totalHoras = parseInt(especialidades.Horas_dia + especialidades.Horas_tarde)

console.log(mañanas_libres);
console.log(tardes_libres);

let imputCardio = () => document.getElementById("flexCheckCardio");
let imputGineco = () => document.getElementById("flexCheckGineco");
let imputTraumato = () => document.getElementById("flexCheckTraumato");
let imputMedClin = () => document.getElementById("flexCheckMedClin");
let imputEco = () => document.getElementById("flexCheckEco");
let imputOft = () => document.getElementById("flexCheckOft");
let imputManiana = () => document.getElementById("flexCheckManiana");
let imputTarde = () => document.getElementById("flexCheckTarde");

let result = () => document.getElementById("resultadoCons");

imputCardio.addEventListener(`change`,() => {
    result.innerHTML = `<h3>Especialidad: ${especialidades.Nombre}</h3>
    <p>Consultorio: ${especialidades.Consultorio}
    <p>Total de horas diarias: ${totalHoras}
    <p>Paga diaria: ${150 * totalHoras}`
})

imputGineco.addEventListener(`change`,() => {
    result.innerHTML = `<h3>Especialidad: ${especialidades.Nombre}</h3>
    <p>Consultorio: ${especialidades.Consultorio}</p>
    <p>Total de horas diarias: ${totalHoras}</p>
    <p>Paga diaria: ${150 * totalHoras}</p>`
})

imputTraumato.addEventListener(`change`,() => {
    result.innerHTML = `<h3>Especialidad: ${especialidades.Nombre}</h3>
    <p>Consultorio: ${especialidades.Consultorio}</p>
    <p>Total de horas diarias: ${totalHoras}</p>
    <p>Paga diaria: ${150 * totalHoras}</p>`
})

imputMedClin.addEventListener(`change`,() => {
    result.innerHTML = `<h3>Especialidad: ${especialidades.Nombre}</h3>
    <p>Consultorio: ${especialidades.Consultorio}</p>
    <p>Total de horas diarias: ${totalHoras}</p>
    <p>Paga diaria: ${150 * totalHoras}</p>`
})

imputEco.addEventListener(`change`,() => {
    result.innerHTML = `<h3>Especialidad: ${especialidades.Nombre}</h3>
    <p>Consultorio: ${especialidades.Consultorio}</p>
    <p>Total de horas diarias: ${totalHoras}</p>
    <p>Paga diaria: ${150 * totalHoras}</p>`
})

imputOft.addEventListener(`change`,() => {
    result.innerHTML = `<h3>Especialidad: ${especialidades.Nombre}</h3>
    <p>Consultorio: ${especialidades.Consultorio}</p>
    <p>Total de horas diarias: ${totalHoras}</p>
    <p>Paga diaria: ${150 * totalHoras}</p>`
})

imputManiana.addEventListener(`change`,() => {
    result.innerHTML = `<h3>`
})

imputTarde.addEventListener(`change`,() => {
    result.innerHTML = `<h3>`
})
