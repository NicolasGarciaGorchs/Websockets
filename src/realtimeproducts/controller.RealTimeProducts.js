const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('RealTimeProducts')
})

module.exports = router