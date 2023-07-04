import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contacto', (req, res) => {
    res.render('main/contacto')
})

router.get('/proyectos', (req, res) => {
    res.render('main/misProyectos')
})

router.get('/proyectos/logos', (req, res) => {
    res.render('proyectos/logos')
})

router.get('/proyectos/appEscritorio', (req, res) => {
    res.render('proyectos/appEscritorio')
})

router.get('/proyectos/appWeb', (req, res) => {
    res.render('proyectos/appWeb')
})

router.get('/proyectos/mockups', (req, res) => {
    res.render('proyectos/mockups')
})

router.get('/about', (req, res) => {
})

export default router;
