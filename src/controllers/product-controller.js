'use strict'
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const createRegister = async(req, res, next) => {
    res.status(201).send(req.body);
};
ROUTER.post('/', createRegister);

const editRegister = async(req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};
ROUTER.put('/:id', editRegister);

const deleteRegister = async(req, res, next) => {
    res.status(201).send(req.body);
};
ROUTER.delete('/:id', editRegister);

module.exports = { createRegister, editRegister, deleteRegister, ROUTER };
