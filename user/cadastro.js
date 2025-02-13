function validarEmails() {
    var email = document.getElementById("email").value;
    var emailConfirm = document.getElementById("email-confirm").value;

    // Se os emails não coincidirem, mostra um alerta
    if (email !== emailConfirm) {
        alert("Os emails não coincidem! Por favor, verifique.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário se os emails forem iguais
}

function validarSenhas() {
    var senha = document.getElementById("senha").value;
    var senhaConfirm = document.getElementById("senha-confirm").value;

    // Se os emails não coincidirem, mostra um alerta
    if (senha !== senhaConfirm) {
        alert("As senhas não coincidem! Por favor, verifique.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário se os emails forem iguais
}
const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, ''); // Remove tudo o que não for número
        if (valor.length <= 2) {
            valor = `(${valor}`;
        } else if (valor.length <= 6) {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        } else {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
        }
        e.target.value = valor; // Atualiza o valor do input
    });