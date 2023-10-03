const socket = io() 
// LEVANTO SOCKET DEL LADO DE CLIENTE (METODO 2) EL 1 ESTA COMO SCRIPT EN HTTP

socket.on('individual', data=> {
    console.log(data)
})

socket.on('broadcast', data => {
    console.log(data)
})

socket.on('todos', data => {
    console.log(data)
})


const user = {
    name: 'Nicolas',
    lastname: 'García Gorchs',
    country: 'Argentina',
}

const form = document.getElementById('createForm') //CAPTURA ELEMENTOS POR ID SOBRE EL FORMULARIO

form.addEventListener('submit', event => { // CAPTURA EL EVENTO
    event.preventDefault() //CON ESTO AL PRESIONAR SUBMIT NO RECARGA

const data = new FormData(form) // MEDIANTE FORMDATA Y EL OBJETO DONDE SE CAPTURA LA INFORMACION (form) SE GUARDA EN data

const obj = {} // ARRAY DONDE SE GUARDAN LOS DATOS, SE PONE [key] COMO CLAVE DE obj

data.forEach((value, key) => (obj[key] = value)) //VALUE= el texto que se coloca en la KEY = name 
socket.emit('message', obj) // DE ACA EMITE EL MENSAJE CON EL USUARIO
// fetch('/users', {//SIRVE PARA SOLICITAR PETICIONES A OTROS SERVIDORES ( ES UNA PROMESA)
//     headers: {    
//         'Content-Type': 'application/json' //TIPO DE CONTENIDO
//     },
//     method:'Post', // METODO A USAR
//     body: JSON.stringify(obj), // PASAR EL ARRAY obj DE JS A JSON
// })  .then(response => response.json()) // PASA DE JSON A JS
//     .then(data => console.log(data))//SI USO => EN .then GENERA OTRO .then
//     .catch(err => console.log(err)) // EN CASO DE QUE NO PASE LO ANTERIOR, EJECUTA .catch
}) 
