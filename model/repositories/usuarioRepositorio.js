const fs = require("fs");
const conexao = require("../../database/conexao");

exports.inserirUsuario = (usuario, callback) =>{
    const sql = "INSERT INTO tbl_usuarios (nome, cpf, email, senha) VALUES (?, ?, ?, ?)"

    conexao.query(sql, [usuario.nome, usuario.cpf, usuario.email, usuario.senha], (erro, resultado) =>{
        if(erro){
            throw erro
        }
        callback(resultado);
    });
};

exports.logarRepositorio = (usuario, callback) =>{
    const sql = "SELECT id, nome, email, permissao, senha FROM tbl_usuarios WHERE email = ? AND senha = ?"
    conexao.query(sql, [usuario.email, usuario.senha], (erro, resultado) =>{
        if(erro){
            throw erro
        }
        callback(resultado[0])
    })
}

exports.atualizarRepositorio = (usuario, callback) => {
    const sql = "UPDATE tbl_usuarios SET nome = ?, email = ? WHERE id = ?"
    conexao.query(sql, [usuario.nome, usuario.email, usuario.id], (erro, resultado) =>{
        if(erro){
            throw erro
        }
        callback(resultado.affectedRows > 0)
    })
}

exports.atualizarSenhaRepositorio = (usuario, callback) => {
    const sql = "UPDATE tbl_usuarios SET senha = ? WHERE id = ?"
    conexao.query(sql, [usuario.senha, usuario.id], (erro, resultado) =>{
        if(erro){
            throw erro
        }
        callback(resultado.affectedRows > 0)
    })
}

exports.buscarPorIdRepositorio = (id, callback) =>{
    const sql = "SELECT * FROM tbl_usuarios WHERE id = ?"
    conexao.query(sql, [id], (erro, resultado) =>{
        if(erro){
            throw erro
        }
        console.log(resultado);
        callback(resultado[0])
    })
}


exports.listarUsuariosRepositorio = (callback) =>{
    const sql = "SELECT id, nome, email FROM tbl_usuarios"
    conexao.query(sql, (erro, resultado) =>{
        if(erro){
            throw erro;
        }
        callback(resultado);
    });
};


exports.deletarUsuarioRepositorio = (id, callback) => {
    const sql = "DELETE FROM tbl_usuarios WHERE id = ?"
    conexao.query(sql, [id], (erro, resultado) =>{
        if(erro) {
            throw erro
        };
        callback(resultado.affectedRows > 0);
    });
};