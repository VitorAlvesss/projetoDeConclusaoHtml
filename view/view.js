function mensagemNaTela(msg){
    Toastify({
            text: msg,
            style: {
                background: "#FF0000",
                color: "#f4f4f4"
            },
        }).showToast();
}

function mensagemNaTelaPositiva(msg){
    Toastify({
            text: msg,
            style: {
                background: "#28a745",
                color: "#f4f4f4"
            },
        }).showToast();
}

