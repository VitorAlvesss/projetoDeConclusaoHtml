const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById('formularioContato').addEventListener('submit', function(event){
    event.preventDefault();
    const mudarTextoBotao = document.getElementById('submitButton');
    mudarTextoBotao.textContent = "Enviando...";
    if(document.getElementById('assunto').value.trim() == "" || document.getElementById('nome').value.trim() == "" || document.getElementById('email').value.trim() == "" 
    || document.getElementById('mensagem').value.trim() == ""){
        mensagemNaTela("Preencha todos os campos!")
        return;
    }

    if(!regexEmail.test(document.getElementById('email').value)){
        mensagemNaTela("Email inválido!")
        return;
    }


    emailjs.send('service_r37mn9j', 'template_qudw1q7', {
       title: document.getElementById('assunto').value,
       name: document.getElementById('nome').value,
       email: document.getElementById('email').value,
       message: document.getElementById('mensagem').value
    })
    .then(() =>{
        mensagemNaTelaPositiva("Email enviado com sucesso!")
    }, (erro) =>{
        mensagemNaTela("Erro ao enviar email. Tente novamente.")
    })
    .finally(() =>{
        mudarTextoBotao.textContent = "Enviar"
    });

});  

