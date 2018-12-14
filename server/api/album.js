const router = require('express').Router()
const {Album, Artist, Song} = require('../db')

//Get all albums
router.get('/', async(req, res, next) => {
    try {
        const albums = await Album.findAll({
            include: [Artist]
        })
        res.json(albums)
    } catch (err){
        next(err)
    }
})

module.exports = router

