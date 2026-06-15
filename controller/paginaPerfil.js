let dadosBanco = {};
const btnBotaoAtualizar = document.getElementById("btnAtualizar")
const btnBotaoAtualizarSenha = document.getElementById("btnAtualizarSenha")
const formulario = document.getElementById("formUsuariosAtualizar");

document.addEventListener("DOMContentLoaded", () =>{
    fetch(`${BASE_URL}usuarios/${sessionStorage.getItem("idUsuario")}`)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
            formulario.nome.value = dados.nome;
            formulario.email.value = dados.email;

            dadosBanco = dados;
        });
});

document.addEventListener("DOMContentLoaded", () =>{
    if(sessionStorage.getItem("permissaoUsuario") === "ADM"){
        const paginaDoAdm = document.getElementById("paginaAdm")
        paginaDoAdm.classList.remove("esconder")
    }
});

btnBotaoAtualizar.addEventListener("click", () =>{
    if(formulario.nome.value.trim() == "" || formulario.email.value.trim() == ""){
        mensagemNaTela("O campo de nome e email não podem ficar em branco.")
        return;
    }

    if(dadosBanco.nome != formulario.nome.value || dadosBanco.email != formulario.email.value){
        fetch(`${BASE_URL}usuarios/${sessionStorage.getItem("idUsuario")}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: formulario.nome.value,
                email: formulario.email.value
            })
        });

        mensagemNaTelaPositiva("Dados atualizados com sucesso!")
    }
});

btnBotaoAtualizarSenha.addEventListener("click", () =>{
    if(formulario.senha.value.trim() == "" || formulario.confirmacaoSenha.value.trim() == ""){
        mensagemNaTela("A senha e a confirmação de senha devem estar preenchidas.");
    }
    else if(formulario.senha.value != formulario.confirmacaoSenha.value){
        mensagemNaTela("A senha e a confirmação de senha não são iguais.");
    }
    else{
        fetch(`${BASE_URL}usuarios/senha/${sessionStorage.getItem("idUsuario")}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                senha: formulario.senha.value
            })      
        });
        mensagemNaTelaPositiva("Senha atualizada com sucesso.")  
    }
})