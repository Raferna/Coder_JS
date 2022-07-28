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

const ctx = document.getElementById('cargaHoraria').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cardiología', 'Ginecología', 'Traumatología', 'Medicina Gral.', 'Ecografías', 'Oftalmología'],
        datasets: [{
            label: 'Cantidad de horas diarias',
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

const listaOpers = document.getElementById("operadores")
fetch(`./js/datos_opers.json`)
  .then ((resp) => resp.json())
  .then ((datos) => {
    datos.forEach(usuario => {
      const li = document.createElement(`li`)
      li.innerHTML = `<h6>Usuario: ${usuario.User}</h5>
        <p>Sector: ${usuario.Sector}</p>
        <p>Puesto: ${usuario.Puesto}</p>`

      listaOpers.append(li)
    });
  })

  const listaRefers = document.getElementById("referentes")
  fetch(`./js/datos_refs.json`)
  .then ((resp) => resp.json())
  .then ((datos) => {
    datos.forEach(usuario => {
      const li = document.createElement(`li`)
      li.innerHTML = `<h6>Usuario: ${usuario.User}</h5>
        <p>Sector: ${usuario.Sector}</p>
        <p>Puesto: ${usuario.Puesto}</p>`

      listaRefers.append(li)
    });
  })