const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Tubas = require('../models/tubas');

const tubasRouter = express.Router();

tubasRouter.use(bodyParser.json());

tubasRouter.route('/')
.get((req,res,next) => {
    Tubas.find({})
    .then((tubas) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(tubas);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Tubas.create(req.body)
    .then((tuba) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(tuba);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    Tubas.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

tubasRouter.route('/:tubaId')
.get((req,res,next) => {
    Tubas.findById(req.params.tubaId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.tubaId);
})
.put((req, res, next) => {
    Tubas.findByIdAndUpdate(req.params.tubaId, {
        $set: req.body
    }, { new: true })
    .then((tuba) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(tuba);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Tubas.findByIdAndRemove(req.params.tubaId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = tubasRouter;