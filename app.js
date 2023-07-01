const formulario = document.getElementById("formulario");

formulario.addEventListener('submit',(e) => {
e.preventDefault();

fetch('https://sheet.best/api/sheets/52b26d52-6cec-4a00-9e1c-df626c784c4d', {

method:'POST',
mode:'cors',
headers:{
    'content-Type': 'application/json'

},
body : JSON.stringify({
"nombre": formulario.nombre.value,
"apellido":formulario.apellido.value,
"cedula": formulario.cedula.value,
"correo": formulario.correo.value,
"contraseña": formulario.contraseña.value, 
"telefono": formulario.telefono.value
})
});
});

const form = document.getElementById("formulario");

formulario.addEventListener('submit',(e) => {
e.preventDefault();

const cedula = formulario.cedula.value;
const contraseña = formulario.contraseña.value;

const dates = {
    cc: cedula,
    pass: contraseña,
};

fetch('https://sheet.best/api/sheets/52b26d52-6cec-4a00-9e1c-df626c784c4d', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type':'application/json'

    },
    body:JSON.stringify(dates)
})
.then(response => {
    if(response.ok){
        window.location.href= "hacer_consulta.html";
    }else {
        console.log('Datos incorrectos');
    }
})
.catch(error => {
    console.log('Error', error);
    alert('Hubo un problema.');


});
});



