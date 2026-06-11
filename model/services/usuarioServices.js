const usuarioQuerys = require("../repositories/usuarioRepositorio.js");

exports.cadastrarUsuario = (usuario, callback) =>{
    usuarioQuerys.inserirUsuario(usuario, (resultado) => {
        callback(resultado);
    });
};

exports.logarServices = (usuario, callback) =>{
    usuarioQuerys.logarRepositorio(usuario, (resultado) => {
        callback(resultado);
    })
};

exports.atualizarServices = (usuario, callback) =>{
        usuarioQuerys.atualizarRepositorio(usuario, (resultado) =>{
            callback(resultado);
        });
};


exports.atualizarSenhaServices = (usuario, callback) =>{
        usuarioQuerys.atualizarSenhaRepositorio(usuario, (resultado) =>{
            callback(resultado);
        });
};

exports.buscarPoridServices = (id, callback) => {
        usuarioQuerys.buscarPorIdRepositorio(id, (resultado) =>{
        callback(resultado);
    });
};

exports.listaUsuariosServices = (callback) => {
    usuarioQuerys.listarUsuariosRepositorio((resultado) => {
        callback(resultado);
    });
};

exports.deletarUsuarioServices = (id, callback) => {
    usuarioQuerys.deletarUsuarioRepositorio(id, (resultado) =>{
        callback(resultado);
    });
};