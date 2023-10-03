const {Router} = require ('express') // TRAIGO SOLO EL ROUTER DE EXPRESS

const router = Router() // ACA SE GUARDA EL ENRUTADOR

router.get('/',(req, res) => { // OPCIONAL USAR 'users.handlebars' , sacando la ruta en app.js
    // res.query.name // llega solo el nombre por la plantilla al poner res.json{{name}}
    // const users = [
    //     {
    //         name: 'Prueba',
    //         lastname: 'Prueba',
    //         country: 'Prueba',
    //         role: 'Prueba',
    //         //ESTE ES EL QUE NO SALE CON EL METODO RENDER DE ABAJO
    //     },
    //     {
    //         name: 'Nico',
    //         lastname: 'Garcia Gorchs',
    //         country: 'Argentina',
    //         role: 'admin',
    //     },
    //     {
    //         name: 'Nati',
    //         lastname: 'Sosa',
    //         country: 'Argentina',
    //         role: 'admin',
    //     },
    //     {
    //         name: 'Zazu',
    //         lastname: 'Garcia Gorchs',
    //         country: 'Argentina',
    //         role: 'user',
    //     },
    //     {
    //         name: 'Circe',
    //         lastname: 'Garcia Gorchs',
    //         country: 'Argentina', // usar comas al final siempre
    //         role: 'user',
    //     }
    // ]
    
    // const toys = [
    //     {
    //         name: 'PS5',
    //         price: 400,
    //     },
    //     {
    //         name: 'Gomera',
    //         price: 4,
    //     },
    //     {
    //         name: 'Pelota',
    //         price: 40,
    //     },
    //     {
    //         name: 'Moto',
    //         price: 4000,
    //     },
    // ]

    // const MIN_NUMBER = 1
    // const maxNumber = users.length

    // const user = users[Math.floor(Math.random() * (maxNumber - MIN_NUMBER) + MIN_NUMBER)]
    // res.render('users', users[1]) // en el numero está la posicion del usuario
    // res.render('users', user) // ACA MUESTRA USUARIOS DE MANERA ALEATORIA
    res.render('home', {
        // object: user,
        // isAdmin: user.role === 'admin', // siempre guardar en una variable la accion
        // toys, // renderiza al mencionarlo
        style: 'style.css' //aca va el css y se linkea como variable en html puro
    })
})


// MIDDLEWARE PARA SUBIR ARCHIVOS (MULTER)

// router.post('/', uploader.single('image'), (req, res) => { // ('image') LO TOMA DE DATO name=
//     console.log(req.body)
//     res.send({message: 'Usuario creado'})
// })

router.post('/', (req, res) => {
    console.log(req.body)
    res.send({message: 'Usuario creado'})
})

module.exports = router
