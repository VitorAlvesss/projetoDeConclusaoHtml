
const botaoSalvarUsuario = document.getElementById("btnSalvarUsuario");
const formulario = document.getElementById("formUsuarios")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

botaoSalvarUsuario.addEventListener("click", (event) =>{
    event.preventDefault();
    const usuario = obtendoDadosUsuario(formulario)
    if(validandoUsuario(usuario) == false){
        return;
    }
    else{
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(response => response.json())
            .then(dados => {
                console.log("Uusuário salvo: ", dados);
                mensagemNaTelaPositiva("Cadastro feito com sucesso!")
                setTimeout(() => {
                    window.location.href = "telaLogin.html";
                }, 2000)
            })
    }

});



function obtendoDadosUsuario(formUsuarios){
    return {
        nome: formUsuarios.nome.value,
        cpf: formUsuarios.cpf.value,
        email: formUsuarios.email.value,
        senha: formUsuarios.senha.value,
        confimacaoSenha: formUsuarios.confimacaoSenha.value
    }
}

function validandoUsuario(usuario){
    if(usuario.senha != usuario.confimacaoSenha){
        mensagemNaTela("As senhas não coincidem.")
        return false
    }

    if(!validacaoCpf(usuario)){
        mensagemNaTela("CPF inválido! Tente novamente.")
        return false
    }

    if(!regexEmail.test(usuario.email)){
        mensagemNaTela("Email inválido!");
        return false;
    }

    return true;   
}

function validacaoCpf(usuario){
    const numero = usuario.cpf;

    if(!/^\d{11}$/.test(numero.toString())){
        return false;
    }

    var soma = 0;
    var digito1 = 0;
    var digito2 = 0;
    for(let i = 0; i <=8; i++){
        let digitos = Number(numero.toString()[i])
        let multiplicando = (10 - i) * digitos
        soma += multiplicando;      
    }
    console.log(soma)

    if(11 - soma % 11 >9){
        digito1 = 0
    }
    else{
        digito1 = 11 - soma % 11;
    }
    soma = 0;

    for(let i = 0; i <=9; i++){
        let digitos = Number(numero.toString()[i])
        let multiplicando = (11 - i) * digitos
        soma += multiplicando;      
    }
    digito2 = 11 - soma % 11;

    if(digito1 != Number(numero.toString()[9]) || digito2 != Number(numero.toString()[10])){
        return false;
    }
    else{
        return true
    }
}