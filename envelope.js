const express = require('express');
const {findElement, findIndexElement, updateElement, deleteElement} = require('./utils.js')
const envelopeRouter = express.Router();

let idEnvelope = 1
const envelopes = []

const createEnvelope = () => {
    const newEnvelope = {
        id: idEnvelope++,
	    categoria: req.body.categoria,
	    valor: req.body.valor,
    }
    envelopes.push(newEnvelope)
}
//get all envelopes
envelopeRouter.get('/', (req, res) => {
    res.status(200).send(envelopes)
});
//get a single envelope
envelopeRouter.get('/:id', (req, res) => {
    const envelope = findElement(envelopes, req.params.id)
    if(envelope){
        res.status(200).send(envelope)
    } else {
        res.status(404).send()
    }
})
//post a new envelope
envelopeRouter.post('/', (req, res) => {
    const dados = req.body;
    const newEnvelope = {
        id: idEnvelope++,
	    categoria: dados.categoria,
	    valor: dados.valor,
    }
    envelopes.push(newEnvelope);
    res.status(201).send(newEnvelope)
});
//update a single envelope
envelopeRouter.put('/:id', (req, res) => {
    const envelope = updateElement(envelopes, req.params.id, req.body)
    if(envelope){
        res.status(200).send(envelope)
    }
    res.status(404).send(envelope)
});
//delete a single envelope
envelopeRouter.delete('/:id', (req, res) => {
    const envelope = deleteElement(envelopes, req.params.id)
    if(envelope){
        res.status(201).send() 
    }
    res.status(404).send()
});










module.exports = envelopeRouter;