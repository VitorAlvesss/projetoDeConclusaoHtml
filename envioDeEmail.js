
document.getElementById('formularioContato').addEventListener('submit', function(event){
    event.preventDefault();
    const mudarTextoBotao = document.getElementById('submitButton');
    mudarTextoBotao.textContent = "Enviando...";

    emailjs.send('service_an6144a', 'template_2u2xful', {
       title: document.getElementById('assunto').value,
       name: document.getElementById('nome').value,
       email: document.getElementById('email').value,
       message: document.getElementById('mensagem').value
    })
    .then(() =>{
        alert('EMAIL ENVIADO COM SUCESSO!')
    }, (erro) =>{
        alert('ERRO AO ENVIAR EMAIL. '+erro)
    })
    .finally(() =>{
        mudarTextoBotao.textContent = "Enviar"
    });

});  

