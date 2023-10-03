const homeController = require('../users/controller.users')
const realtimeproductsController = require('../realtimeproducts/controller.RealTimeProducts')


const router = app => {
    app.use('/home', homeController)
    app.use('/realtimeproducts', realtimeproductsController)
    app.use('*', (req,res) => {
        res.status(404).json({message: '404 NOT FOUND'})
    })
}

module.exports = router