const router = require('express').Router()

// connect API routes here
router.use('/albums', require('./album'))

module.exports = router
