const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Titulo hola desde el back'}))
router.get('/nosotros', (req, res) => res.render('nosotros', {title: 'Sobre nosotros'}))
router.get('/contacto', (req, res) => res.render('contacto', {title: 'Contacto'}))
router.get('/', (req, res) => res.render('index'))
router.get('/', (req, res) => res.render('index'))

module.exports = router