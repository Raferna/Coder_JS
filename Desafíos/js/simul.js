let user;
let userLS = JSON.stringify(localStorage.getItem("user"))

user = userLS ? alert("Bienvenido") : prompt("Ingresa tu nombre de usuario")

//Distribución de especialistas en consultorio médico
const especialidades = [
    {Nombre: "Cardiología", Consultorio: "6",Horas_dia: 0, Horas_tarde: 5},
    {Nombre: "Ginecología", Consultorio: "5",Horas_dia: 0, Horas_tarde: 6},
    {Nombre: "Traumatología", Consultorio: "4",Horas_dia: 4, Horas_tarde: 0},
    {Nombre: "Medicina General", Consultorio: "3",Horas_dia: 4, Horas_tarde: 6},
    {Nombre: "Ecografía", Consultorio: "2",Horas_dia: 3, Horas_tarde: 0},
    {Nombre: "Oftalmología", Consultorio: "1",Horas_dia: 2, Horas_tarde: 5}];

const saveLS = (c, v) => {localStorage.setItem(c, v)};
saveLS("listaEspecs", JSON.stringify(especialidades));
const filtro = JSON.parse(localStorage.getItem("listaEspecs"));

const especMañLibres = filtro.filter((el) => el.Horas_dia === 0)
const especTardesLibres = filtro.filter((el) => el.Horas_tarde === 0)
const consLibresMañ = especMañLibres.map ((el) => el.Consultorio)
const consLibresTar = especTardesLibres.map ((el) => el.Consultorio)

let imputCardio = document.getElementById("flexradioCardio");
let imputGineco = document.getElementById("flexradioGineco");
let imputTraumato = document.getElementById("flexradioTraumato");
let imputMedGral = document.getElementById("flexradioMedGral");
let imputEco = document.getElementById("flexradioEco");
let imputOft = document.getElementById("flexradioOft");
let imputManiana = document.getElementById("flexradioManiana");
let imputTarde = document.getElementById("flexradioTarde");

// Info sobre especialidad seleccionada
let result = document.getElementById("resultadoCons");
{/* Turnos disponibles para especialidad seleccionada */}
let planilla = document.getElementById("planillaTurnos");

imputCardio.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[0].Nombre}</h4>
    <p>Consultorio: ${especialidades[0].Consultorio}
    <p>Total de horas diarias: ${(especialidades[0].Horas_dia) + (especialidades[0].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[0].Horas_dia) + (especialidades[0].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos disponibles</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">08</th>
        <th scope="col">09</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
        <th scope="col">14</th>
        <th scope="col">15</th>
        <th scope="col">16</th>
        <th scope="col">17</th>
        <th scope="col">18</th>
        <th scope="col">19</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">:00</th>
        <td id="08:00"></td>
        <td id="09:00"></td>
        <td id="10:00"></td>
        <td id="11:00"></td>
        <td id="12:00"></td>
        <td id="13:00"></td>
        <td id="14:00"></td>
        <td id="15:00">X</td>
        <td id="16:00"></td>
        <td id="17:00">X</td>
        <td id="18:00">X</td>
        <td id="19:00">X</td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"></td>
        <td id="09:30"></td>
        <td id="10:30"></td>
        <td id="11:30"></td>
        <td id="12:30"></td>
        <td id="13:30"></td>
        <td id="14:30"></td>
        <td id="15:30"></td>
        <td id="16:30">X</td>
        <td id="17:30">X</td>
        <td id="18:30">X</td>
        <td id="19:30">X</td>
      </tr>
    </tbody>
  </table>
`
})

imputGineco.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[1].Nombre}</h4>
    <p>Consultorio: ${especialidades[1].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[1].Horas_dia) + (especialidades[1].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[1].Horas_dia) + (especialidades[1].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos disponibles</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">08</th>
        <th scope="col">09</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
        <th scope="col">14</th>
        <th scope="col">15</th>
        <th scope="col">16</th>
        <th scope="col">17</th>
        <th scope="col">18</th>
        <th scope="col">19</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">:00</th>
        <td id="08:00"></td>
        <td id="09:00"></td>
        <td id="10:00"></td>
        <td id="11:00"></td>
        <td id="12:00"></td>
        <td id="13:00"></td>
        <td id="14:00">X</td>
        <td id="15:00">X</td>
        <td id="16:00"></td>
        <td id="17:00">X</td>
        <td id="18:00">X</td>
        <td id="19:00">X</td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"></td>
        <td id="09:30"></td>
        <td id="10:30"></td>
        <td id="11:30"></td>
        <td id="12:30"></td>
        <td id="13:30"></td>
        <td id="14:30">X</td>
        <td id="15:30"></td>
        <td id="16:30"></td>
        <td id="17:30">X</td>
        <td id="18:30">X</td>
        <td id="19:30">X</td>
      </tr>
    </tbody>
  </table>
`
})

imputTraumato.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[2].Nombre}</h4>
    <p>Consultorio: ${especialidades[2].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[2].Horas_dia) + (especialidades[2].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[2].Horas_dia) + (especialidades[2].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos disponibles</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">08</th>
        <th scope="col">09</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
        <th scope="col">14</th>
        <th scope="col">15</th>
        <th scope="col">16</th>
        <th scope="col">17</th>
        <th scope="col">18</th>
        <th scope="col">19</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">:00</th>
        <td id="08:00">X</td>
        <td id="09:00">X</td>
        <td id="10:00"></td>
        <td id="11:00">X</td>
        <td id="12:00"></td>
        <td id="13:00"></td>
        <td id="14:00"></td>
        <td id="15:00"></td>
        <td id="16:00"></td>
        <td id="17:00"></td>
        <td id="18:00"></td>
        <td id="19:00"></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30">X</td>
        <td id="09:30">X</td>
        <td id="10:30">X</td>
        <td id="11:30">X</td>
        <td id="12:30"></td>
        <td id="13:30"></td>
        <td id="14:30"></td>
        <td id="15:30"></td>
        <td id="16:30"></td>
        <td id="17:30"></td>
        <td id="18:30"></td>
        <td id="19:30"></td>
      </tr>
    </tbody>
  </table>
`
})

imputMedGral.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[3].Nombre}</h4>
    <p>Consultorio: ${especialidades[3].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[3].Horas_dia) + (especialidades[3].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[3].Horas_dia) + (especialidades[3].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos disponibles</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">08</th>
        <th scope="col">09</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
        <th scope="col">14</th>
        <th scope="col">15</th>
        <th scope="col">16</th>
        <th scope="col">17</th>
        <th scope="col">18</th>
        <th scope="col">19</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">:00</th>
        <td id="08:00">X</td>
        <td id="09:00">X</td>
        <td id="10:00">X</td>
        <td id="11:00"></td>
        <td id="12:00"></td>
        <td id="13:00">X</td>
        <td id="14:00"></td>
        <td id="15:00">X</td>
        <td id="16:00"></td>
        <td id="17:00">X</td>
        <td id="18:00">X</td>
        <td id="19:00">X</td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30">X</td>
        <td id="09:30">X</td>
        <td id="10:30">X</td>
        <td id="11:30"></td>
        <td id="12:30">X</td>
        <td id="13:30">X</td>
        <td id="14:30"></td>
        <td id="15:30"></td>
        <td id="16:30">X</td>
        <td id="17:30">X</td>
        <td id="18:30">X</td>
        <td id="19:30">X</td>
      </tr>
    </tbody>
  </table>
`
})

imputEco.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[4].Nombre}</h4>
    <p>Consultorio: ${especialidades[4].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[4].Horas_dia) + (especialidades[4].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[4].Horas_dia) + (especialidades[4].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos disponibles</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">08</th>
        <th scope="col">09</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
        <th scope="col">14</th>
        <th scope="col">15</th>
        <th scope="col">16</th>
        <th scope="col">17</th>
        <th scope="col">18</th>
        <th scope="col">19</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">:00</th>
        <td id="08:00">X</td>
        <td id="09:00">X</td>
        <td id="10:00">X</td>
        <td id="11:00"></td>
        <td id="12:00"></td>
        <td id="13:00"></td>
        <td id="14:00"></td>
        <td id="15:00"></td>
        <td id="16:00"></td>
        <td id="17:00"></td>
        <td id="18:00"></td>
        <td id="19:00"></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30">X</td>
        <td id="09:30">X</td>
        <td id="10:30">X</td>
        <td id="11:30"></td>
        <td id="12:30"></td>
        <td id="13:30"></td>
        <td id="14:30"></td>
        <td id="15:30"></td>
        <td id="16:30"></td>
        <td id="17:30"></td>
        <td id="18:30"></td>
        <td id="19:30"></td>
      </tr>
    </tbody>
  </table>
`
})

imputOft.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[5].Nombre}</h4>
    <p>Consultorio: ${especialidades[5].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[5].Horas_dia) + (especialidades[5].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[5].Horas_dia) + (especialidades[5].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos disponibles</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">08</th>
        <th scope="col">09</th>
        <th scope="col">10</th>
        <th scope="col">11</th>
        <th scope="col">12</th>
        <th scope="col">13</th>
        <th scope="col">14</th>
        <th scope="col">15</th>
        <th scope="col">16</th>
        <th scope="col">17</th>
        <th scope="col">18</th>
        <th scope="col">19</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">:00</th>
        <td id="08:00"></td>
        <td id="09:00"></td>
        <td id="10:00"></td>
        <td id="11:00">X</td>
        <td id="12:00">X</td>
        <td id="13:00">X</td>
        <td id="14:00">X</td>
        <td id="15:00">X</td>
        <td id="16:00">X</td>
        <td id="17:00">X</td>
        <td id="18:00"></td>
        <td id="19:00"></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"></td>
        <td id="09:30"></td>
        <td id="10:30"></td>
        <td id="11:30"></td>
        <td id="12:30">X</td>
        <td id="13:30"></td>
        <td id="14:30">X</td>
        <td id="15:30"></td>
        <td id="16:30">X</td>
        <td id="17:30"></td>
        <td id="18:30"></td>
        <td id="19:30"></td>
      </tr>
    </tbody>
  </table>
`
})

imputManiana.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Consultorios libres por la mañana</h4>
    <p>${consLibresMañ}</p>`
    planilla.innerHTML = ``
})

imputTarde.addEventListener(`change`,() => {
    result.innerHTML = `<h4>Consultorios libres por la tarde</h4>
    <p>${consLibresTar}</p>`
    planilla.innerHTML = ``
})


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cardiología', 'Ginecología', 'Traumatología', 'Medicina Gral.', 'Ecografías', 'Oftalmología'],
        datasets: [{
            label: 'Cantidad de horas diarias por especialidad',
            data: [5, 6, 4, 10, 3, 7],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

