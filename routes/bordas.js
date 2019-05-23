const express = require('express');
const router = express.Router();

//Loading Borda Model
const Borda = require('../models/borda')

//Função middleware para encontrar a borda pelo ID
async function getBorda(req, res, next) {
    let borda
    try {
        borda = await Borda.findById(req.params.id)
        if (borda == null) {
            return res.status(400).json({ message: "Não foi possivel encontrar a borda" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.borda = borda
    next()
}

//Getting All
router.get('/', async (req, res) => {
    try {
        const bordas = await Borda.find()
        res.json(bordas)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting One
router.get('/:id', getBorda, (req, res) => {
    res.json(res.borda)
})

//Creating one
router.post('/', async (req, res) => {
    const borda = new Borda({
        name: req.body.name,
        addValue: req.body.addValue
    })

    try {
        const newBorda = await borda.save()
        res.status(201).json(newBorda)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Updating one
router.patch('/:id', getBorda, async (req, res) => {
    if (req.body.name != null) {
        res.borda.name = req.body.name
    }
    if (req.body.addValue != null) {
        res.borda.addValue = req.body.addValue
    }
    try {
        const updatedBorda = await res.borda.save();
        res.status(200).json(updatedBorda);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete('/:id', getBorda, async (req, res) => {
    try {
        await res.borda.remove()
        res.json({ message: "Borda apagada com sucesso" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router