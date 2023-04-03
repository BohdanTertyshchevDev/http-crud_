const {Thing} = require('../models/index');

module.exports.createThing = async (req, res, next) => {
    const {body} = req;
    try {
        const createdThing = await Thing.create(body);
        if(createdThing) {
            return res.status(201).send(createdThing);
        } else {
            return req.status(400).send();
        }
    } catch (error) {
        next(error);
    }
}

module.exports.getAllThings = async (req, res, next) => {
    try {
        const things = await Thing.findAll();
        return res.status(200).send(things);
    } catch (error) {
        next(error);
    }
}

module.exports.getOne = async (req, res, next) => {
    const {params: {id}} = req;
    try {
        const thing = await Thing.findByPk(id);
        return res.status(200).send(thing);
    } catch (error) {
        next(error);
    }
}