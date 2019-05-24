const express = require('express');
const router = express.Router();

//Loading edge Model
const Edge = require('../models/edge')

//Middleware function to find the Edge by ID
async function getEdge(req, res, next) {
    let edge
    try {
        edge = await Edge.findById(req.params.id)
        if (edge == null) {
            return res.status(400).json({ message: "Cannot find the Edge" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.edge = edge
    next()
}

//Getting All
router.get('/', async (req, res) => {
    try {
        const edges = await Edge.find()
        res.json(edges)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting One
router.get('/:id', getEdge, (req, res) => {
    res.json(res.edge)
})

//Creating one
router.post('/', async (req, res) => {
    const edge = new Edge({
        name: req.body.name,
        addValue: req.body.addValue
    })

    try {
        const newEdge = await edge.save()
        res.status(201).json(newEdge)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Updating one
router.patch('/:id', getEdge, async (req, res) => {
    if (req.body.name != null) {
        res.edge.name = req.body.name
    }
    if (req.body.addValue != null) {
        res.edge.addValue = req.body.addValue
    }
    try {
        const updatedEdge = await res.edge.save();
        res.status(200).json(updatedEdge);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete('/:id', getEdge, async (req, res) => {
    try {
        await res.edge.remove()
        res.json({ message: "edge deleted successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router