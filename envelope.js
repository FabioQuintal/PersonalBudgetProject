const express = require('express');
const envelopeRouter = express.Router();

let idEnvelope = 1
const envelopes = []

const createEnvelope = (req) => {
    const newEnvelope = {
        id: idEnvelope++,
	    categoria: req.categoria,
	    valor: req.valor,
	    valorUtilizado: 0,
	    //valorRestante: valor-valorUtilizado
    }
    envelopes.push(newEnvelope)
}

envelopeRouter.get('/', (req, res) => {
    console.log('teste')
    res.send('envelope router')
});


envelopeRouter.post('/', (req, res) => {
    const post = createEnvelope(req.query)
    res.send(post)
});



module.exports = envelopeRouter;