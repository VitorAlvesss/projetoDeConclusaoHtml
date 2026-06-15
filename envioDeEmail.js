
document.getElementById('formularioContato').addEventListener('submit', function(event){
    event.preventDefault();
    const mudarTextoBotao = document.getElementById('submitButton');
    mudarTextoBotao.textContent = "Enviando...";

    emailjs.send('service_r37mn9j', 'template_qudw1q7', {
       title: document.getElementById('assunto').value,
       name: document.getElementById('nome').value,
       email: document.getElementById('email').value,
       message: document.getElementById('mensagem').value
    })
    .then(() =>{
        Toastify({
            text: "E-mail enviado com sucesso!",
            style: {
                background: "#28a745",
                color: "#f4f4f4"
            },
        }).showToast();
    }, (erro) =>{
        Toastify({
            text: "Erro ao enviar email. Tente novamente.",
            style: {
                background: "#FF0000",
                color: "#f4f4f4"
            },
        }).showToast();
    })
    .finally(() =>{
        mudarTextoBotao.textContent = "Enviar"
    });

});  

