const modal = document.getElementById("popup")
const btnSalvar = document.getElementById("salvar")
const btnFecharModal = document.getElementById("fecharModal")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nomeModal = document.getElementById("nomeModal")
const emailModal = document.getElementById("emailModal")

btnFecharModal.addEventListener("click", () =>{
    modal.close();
})

btnSalvar.addEventListener("click", () =>{
    if(nomeModal.value.trim() == "" || emailModal.value.trim() == ""){
        mensagemNaTela("O nome e o email não podem ficar em branco.")
        return;
    }

    if(!regexEmail.test(emailModal.value)){
        mensagemNaTela("Email inválido!");
        return;
    }

    else{
        fetch(`${BASE_URL}usuarios/${modal.dataset.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nomeModal.value,
                email: emailModal.value
            })
        })
        .then(response => response.json())
        .then(dados => {
            mensagemNaTelaPositiva("Dados atualizados com sucesso.");
            modal.close();
            listarUsuarios();
        });
    }
});