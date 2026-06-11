const model = require('../model/services/usuarioServices.js')
exports.salvar = (req, res) => {
    const usuario = req.body;
    model.cadastrarUsuario(usuario, (resultado) => {
        res.status(201).json({
            mensagem: "Uusário cadastrado com sucesso."
        });
    });
};


exports.logar = (req, res) => {
    const usuario = req.body;
    model.logarServices(usuario, (resultado) => {
        if(resultado !=null){
            res.status(200).json({
                mensagem: "Login feito com sucesso.",
                nome: resultado.nome,
                permissao: resultado.permissao,
                id: resultado.id
            });
        }
        else{
            res.status(401).json({
                mensagem: "Login incorreto."
            });
        }
    });
};

exports.atualizar = (req, res) =>{
    const usuario = req.body;
    usuario.id = req.params.id;
    model.atualizarServices(usuario, (resultado) =>{
        if(resultado > 0){
            res.status(200).json({
                mensagem: "Dados atualizados com sucesso."
            })
        }
        else{
            res.status(400).json({
                mensagem: "Erro ao atualizar dados."
            })
        }
    })
}

exports.atualizarSenha = (req, res) =>{
    const usuario = req.body;
    usuario.id = req.params.id;
    model.atualizarSenhaServices(usuario, (resultado) =>{
        if(resultado >0){
            res.status(200).json({
                mensagem: "Senha atualizado com sucesso."
            })
        }
        else{
            res.status(400).json({
                mensagem: "Erro ao salvar senha."
            })
        }
    });
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;
    model.buscarPoridServices(id, (resultado) =>{
        if(resultado != null){
            res.status(200).json({
                mensagem: "Dados buscados com sucesso!",
                nome: resultado.nome,
                email: resultado.email
            });
        }
        else{
            res.status(400).json({
                mensagem: "Erro ao buscar dados."
            });
        }
    });
};

exports.listarUsuarios = (req, res) => {
    model.listaUsuariosServices((resultado) =>{
        if(resultado != null){
            res.status(200).json(resultado);
        }
        else{
            res.status(400).json({
                mensagem: "Erro ao buscar usuários;"
            });
        }
    });
};

exports.deletarUsuario = (req, res) => {
    const id = req.params.id;
    model.deletarUsuarioServices(id, (resultado) => {
        if(resultado >0){
            res.status(200).json({
                mensagem: "Usuário excluído com sucesso."
            })
        }
        else{
            res.status(400).json({
                mensagem: "Erro ao deletar usuário."
            })
        }
    })
}
