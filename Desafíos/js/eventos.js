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
/* Turnos disponibles para especialidad seleccionada */
let planilla = document.getElementById("planillaTurnos");
// Loader
let animLoader = document.getElementById("animLoader");

//Eventos Cardio
imputCardio.addEventListener(`change`,() => {
    animLoader.innerHTML = `<div class="d-flex align-items-center">
      <strong>Cargando...</strong>
      <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
      </div>`
    setTimeout(() => {
      result.innerHTML = `<h4>Especialidad: ${especialidades[0].Nombre}</h4>
      <p>Consultorio: ${especialidades[0].Consultorio}
      <p>Total de horas diarias: ${(especialidades[0].Horas_dia) + (especialidades[0].Horas_tarde)}
      <p>Paga diaria: $ ${150 * ((especialidades[0].Horas_dia) + (especialidades[0].Horas_tarde))}`
      planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
      <caption>Turnos reservados</caption>
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
          <td id="08:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="09:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="10:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="11:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="12:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="13:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="14:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="15:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="16:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="17:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="18:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="19:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
        </tr>

        <tr>
          <th scope="row">:30</th>
          <td id="08:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="09:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="10:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="11:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="12:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="13:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="14:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="15:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="16:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="17:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="18:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
          <td id="19:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
            <label class="form-check-label" for="flexCheckDefault">
            </label></td>
        </tr>
      </tbody>
    </table>
  `
      animLoader.innerHTML = ""
    }, 3000);
})
//Eventos Gineco
imputGineco.addEventListener(`change`,() => {
    animLoader.innerHTML = `<div class="d-flex align-items-center">
    <strong>Cargando...</strong>
    <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
    </div>`
  setTimeout(() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[1].Nombre}</h4>
    <p>Consultorio: ${especialidades[1].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[1].Horas_dia) + (especialidades[1].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[1].Horas_dia) + (especialidades[1].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos reservados</caption>
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
        <td id="08:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>
    </tbody>
  </table>
`
  animLoader.innerHTML = ""
    }, 3000);
})
//Eventos Traumato
imputTraumato.addEventListener(`change`,() => {
     animLoader.innerHTML = `<div class="d-flex align-items-center">
      <strong>Cargando...</strong>
      <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
      </div>`
    setTimeout(() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[2].Nombre}</h4>
    <p>Consultorio: ${especialidades[2].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[2].Horas_dia) + (especialidades[2].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[2].Horas_dia) + (especialidades[2].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos reservados</caption>
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
        <td id="08:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>
    </tbody>
  </table>
`
      animLoader.innerHTML = ""
    }, 3000);
})
//Eventos Medicina Gral.
imputMedGral.addEventListener(`change`,() => {
    animLoader.innerHTML = `<div class="d-flex align-items-center">
      <strong>Cargando...</strong>
      <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
      </div>`

    setTimeout(() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[3].Nombre}</h4>
    <p>Consultorio: ${especialidades[3].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[3].Horas_dia) + (especialidades[3].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[3].Horas_dia) + (especialidades[3].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos reservados</caption>
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
        <td id="08:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>
    </tbody>
  </table>
`
  animLoader.innerHTML = ""
    }, 3000);
})
//Eventos Ecografías
imputEco.addEventListener(`change`,() => {
    animLoader.innerHTML = `<div class="d-flex align-items-center">
      <strong>Cargando...</strong>
      <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
      </div>`

    setTimeout(() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[4].Nombre}</h4>
    <p>Consultorio: ${especialidades[4].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[4].Horas_dia) + (especialidades[4].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[4].Horas_dia) + (especialidades[4].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos reservados</caption>
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
        <td id="08:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>
    </tbody>
  </table>
`
  animLoader.innerHTML = ""
    }, 3000);
})
//Eventos Oftalmo
imputOft.addEventListener(`change`,() => {
    animLoader.innerHTML = `<div class="d-flex align-items-center">
      <strong>Cargando...</strong>
      <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
      </div>`

    setTimeout(() => {
    result.innerHTML = `<h4>Especialidad: ${especialidades[5].Nombre}</h4>
    <p>Consultorio: ${especialidades[5].Consultorio}</p>
    <p>Total de horas diarias: ${(especialidades[5].Horas_dia) + (especialidades[5].Horas_tarde)}
    <p>Paga diaria: $ ${150 * ((especialidades[5].Horas_dia) + (especialidades[5].Horas_tarde))}`
    planilla.innerHTML = `<table class="table table-sm table-success table-bordered caption-top">
    <caption>Turnos reservados</caption>
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
        <td id="08:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:00"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:00"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>

      <tr>
        <th scope="row">:30</th>
        <td id="08:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="09:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="10:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="11:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="12:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="13:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="14:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="15:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="16:30"><input class="form-check-input check-change" type="checkbox" value="" checked disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="17:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="18:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
        <td id="19:30"><input class="form-check-input check-change" type="checkbox" value="" disabled>
          <label class="form-check-label" for="flexCheckDefault">
          </label></td>
      </tr>
    </tbody>
  </table>
`
  animLoader.innerHTML = ""
    }, 3000);
})
//Eventos Filtro mañanas
imputManiana.addEventListener(`change`,() => {
  animLoader.innerHTML = `<div class="d-flex align-items-center">
  <strong>Cargando...</strong>
  <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
  </div>`

setTimeout(() => {
    result.innerHTML = `<h4>Consultorios libres por la mañana</h4>
    <p>${consLibresMañ}</p>`
    planilla.innerHTML = ``
    animLoader.innerHTML = ""
    }, 3000);
    
})
//Eventos Filtro tardes
imputTarde.addEventListener(`change`,() => {
  animLoader.innerHTML = `<div class="d-flex align-items-center">
  <strong>Cargando...</strong>
  <div class="spinner-grow ms-auto text-success" role="status" aria-hidden="true"></div>
  </div>`

setTimeout(() => {
    result.innerHTML = `<h4>Consultorios libres por la tarde</h4>
    <p>${consLibresTar}</p>`
    planilla.innerHTML = ``
    animLoader.innerHTML = ""
    }, 3000);
    
})