setInterval(() => {
  let ushuaiaElement = document.querySelector("#ushuaia");
  let ushuaiaDateElement = ushuaiaElement.querySelector(".date");
  let ushuaiaTimeElement = ushuaiaElement.querySelector(".time");
  let ushuaiaTime = moment().tz("America/Argentina/Ushuaia");

  ushuaiaDateElement.innerHTML = ushuaiaTime.format("MMMM Do YYYY");

  ushuaiaTimeElement.innerHTML = ushuaiaTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}, 1000);

function updateRomeTime() {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");

  romeTimeElement.innerHTML = romeTime.format("h:mm:ss SS [<small>]A[<small>]");
}
setInterval(updateRomeTime, 1000);
