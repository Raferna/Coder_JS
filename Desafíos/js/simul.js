//Distribución de especialistas en consultorio médico
const especialidades = [
    {Nombre: "Cardiología", Consultorio: "6",Horas_dia: 0, Horas_tarde: 7},
    {Nombre: "Ginecología", Consultorio: "5",Horas_dia: 0, Horas_tarde: 8},
    {Nombre: "Traumatología", Consultorio: "4",Horas_dia: 4, Horas_tarde: 0},
    {Nombre: "Medicina General", Consultorio: "3",Horas_dia: 4, Horas_tarde: 6},
    {Nombre: "Ecografía", Consultorio: "2",Horas_dia: 0, Horas_tarde: 3},
    {Nombre: "Oftalmología", Consultorio: "1",Horas_dia: 4, Horas_tarde: 8}];

const mañanas_libres = especialidades.filter((el) => el.Horas_dia === 0)
const tardes_libres = especialidades.filter((el) => el.Horas_tarde === 0)

console.log(mañanas_libres);
console.log(tardes_libres);

let imputCardio = document.getElementById("flexradioCardio");
let imputGineco = document.getElementById("flexradioGineco");
let imputTraumato = document.getElementById("flexradioTraumato");
let imputMedGral = document.getElementById("flexradioMedGral");
let imputEco = document.getElementById("flexradioEco");
let imputOft = document.getElementById("flexradioOft");
let imputManiana = document.getElementById("flexradioManiana");
let imputTarde = document.getElementById("flexradioTarde");

let result = document.getElementById("resultadoCons");

imputCardio.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[0].Nombre}</h4>
    <p>Consultorio: ${especialidades[0].Consultorio}
    <p>Total de horas diarias: ${(especialidades[0].Horas_dia) + (especialidades[0].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[0].Horas_dia) + (especialidades[0].Horas_tarde))}`
})

imputGineco.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[1].Nombre}</h4>
    <p>Consultorio: ${especialidades[1].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[1].Horas_dia) + (especialidades[1].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[1].Horas_dia) + (especialidades[1].Horas_tarde))}`
})

imputTraumato.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[2].Nombre}</h4>
    <p>Consultorio: ${especialidades[2].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[2].Horas_dia) + (especialidades[2].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[2].Horas_dia) + (especialidades[2].Horas_tarde))}`
})

imputMedGral.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[3].Nombre}</h4>
    <p>Consultorio: ${especialidades[3].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[3].Horas_dia) + (especialidades[3].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[3].Horas_dia) + (especialidades[3].Horas_tarde))}`
})

imputEco.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[4].Nombre}</h4>
    <p>Consultorio: ${especialidades[4].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[4].Horas_dia) + (especialidades[4].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[4].Horas_dia) + (especialidades[4].Horas_tarde))}`
})

imputOft.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[5].Nombre}</h4>
    <p>Consultorio: ${especialidades[5].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[5].Horas_dia) + (especialidades[5].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[5].Horas_dia) + (especialidades[5].Horas_tarde))}`
})

imputManiana.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Consultorios libres</h4>
    <p>${mañanas_libres.Nombre}</p>`
})

imputTarde.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Consultorios libres</h4>
    <p>${tardes_libres}</p>`
})
