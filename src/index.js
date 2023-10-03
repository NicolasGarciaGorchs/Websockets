// const app = require('./app')
// const { Server } = require('socket.io')
// const PORT = 3000
// // const socket = io()


// const httpServer = app.listen(PORT, () => {
//     console.log(`Servidor corriendo en puerto ${PORT}`)
// })

// const io = new Server(httpServer) // SE ENVIA EL SERVIDOR COMO PARAMETRO

// io.on('connection', socket => { // CONEXION Y PARAMETRO
//     socket.on('message', payload => { // LA EMISION VA DENTRO DE LA CALLBACK DE io.on 
//         console.log(payload, socket.id)
//     })

//     socket.emit('individual',`Este mensaje es para ${socket.id}`) // MENSAJE INDIVIDUAL

//     socket.broadcast.emit('broadcast', `un mensaje para todos menos para ${socket.id}`) // EL MENSAJE SE ENVIA A TODOS LOS SOCKETS MENOS PARA EL SOCKET DE DONDE SALE EL EVENTO

//     io.emit('todos', 'Este es un mensaje para todos los conectados') // MENSAJE PARA TODOS LOS CONECTADOS
// }) 




// // app.listen(PORT, () => {
// //     console.log(`Servidor corriendo en el puerto ${PORT}`) // COMILLAS INVERTIDAS CON ALT+96
// // }) ASI SIN SOCKET

