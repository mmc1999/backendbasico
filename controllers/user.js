const {response} = require("express")

const usuariosGet = (req, res = response) => {
    const {q, nombre = "no name",apiKey, page=1} = req.query;
    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apiKey,
        page
    })
};

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg:'Post API - controlador',
        body
    })
};

const usuariosPut = (req, res = response) => {

    const {id} = req.params.id;

    res.json({
        msg:'Put API - controlador',
        id
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg:'Delete API - controlador'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}