const usuarioQuerys = require("../repositories/usuarioRepositorio.js");
const bcrypt = require("bcrypt");
exports.cadastrarUsuario = (usuario, callback) =>{
    bcrypt.hash(usuario.senha, 10, (erro, hash) =>{
        if(erro){
            throw erro;
        }
        usuario.senha = hash;
        usuarioQuerys.inserirUsuario(usuario, (resultado) =>{
            callback(resultado);
        });
    });
};

exports.logarServices = (usuario, callback) =>{
    usuarioQuerys.logarRepositorio(usuario, (resultado) => {
        if(!resultado){
            callback(null);
            return;
        }
        bcrypt.compare(usuario.senha, resultado.senha, (erro, igual) =>{
            if(igual){
                callback(resultado);
            }
            else{
                callback(null);
            }
        });
    });
};

exports.atualizarServices = (usuario, callback) =>{
        usuarioQuerys.atualizarRepositorio(usuario, (resultado) =>{
            callback(resultado);
        });
};


exports.atualizarSenhaServices = (usuario, callback) =>{
        bcrypt.hash(usuario.senha, 10, (erro, hash) =>{
            if(erro){
                throw erro;
            }
            usuario.senha = hash;
            usuarioQuerys.atualizarSenhaRepositorio(usuario, (resultado) =>{
                callback(resultado);
            });
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