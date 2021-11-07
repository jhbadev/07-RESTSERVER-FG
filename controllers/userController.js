const { response } = require('express')

const User = require('../models/user');

const userGet = (req, res = response) => {

    //const params = req.query;
    const { id, country, page, limit } = req.query;

    res.json({
        msg: 'GET userController',
        //params: params,
        id,
        country,
        page,
        limit
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;
    console.log("id", id);

    res.json({
        msg: 'PUT userController',
        id
    });


}

const userPost = async (req, res = response) => {

    const { name, email, password, role, img } = req.body;
    // const usuario = new User(body);
    const usuario = new User({ name, email, password, role, img });

    try {
        await usuario.save();
        res.status(201).json({
            code: 201,
            success: true,
            message: 'User Added successfully',
            usuario

        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            success: false,
            msg: error.message,
        })


    }



}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE userController'
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH userController'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}