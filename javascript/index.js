setInterval(() => {
  let ushuaiaElement = document.querySelector("#ushuaia");
  if (ushuaiaElement) {
    let ushuaiaDateElement = ushuaiaElement.querySelector(".date");
    let ushuaiaTimeElement = ushuaiaElement.querySelector(".time");
    let ushuaiaTime = moment().tz("America/Argentina/Ushuaia");

    ushuaiaDateElement.innerHTML = ushuaiaTime.format("MMMM Do YYYY");

    ushuaiaTimeElement.innerHTML = ushuaiaTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
}, 1000);

function updateRomeTime() {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");

  romeTimeElement.innerHTML = romeTime.format("h:mm:ss SS [<small>]A[<small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}<small></div>
        </div>`;
}
setInterval(updateRomeTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
