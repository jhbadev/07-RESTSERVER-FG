const { response } = require('express')


const userGet = (req, res = response) => {

    //const params = req.query;
    const {id, country, page, limit} = req.query;

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

const userPost = (req, res = response) => {

    const { author, title, edition } = req.body;
    res.json({
        msg: 'POST userController',
        author,
        title,
        edition
    });
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