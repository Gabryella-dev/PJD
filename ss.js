var usuarios = [
    { email: 'elizabeth.silva@seduc.pa.gov.br', senha: '@@Silva@@', nome:'Elizabeth Silva'},
    { email: 'rosangela.rocha@seduc.pa.gov.br', senha: '#R748690', nome: 'Rosângela Rocha'}
];

function validarLogin() {
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var dominioEspecifico = "@seduc.pa.gov.br";

    if (!email.endsWith(dominioEspecifico)) {
        alert("Email inválido! Deve ser do domínio " + dominioEspecifico);
        return;
    }
    
    var nomeUsuario = email.replace(dominioEspecifico, "");
    
    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.email === email;
    });

    if (usuarioEncontrado) {
        if (senha === usuarioEncontrado.senha) {
             window.location.href = "index2.html";
            } 
        else {
            alert("Senha incorreta!");
        }
    } else {
        alert("Usuário não encontrado!");
    }
}
function exibirMensagemDeErro(mensagem) {
    var elementoErro = document.getElementById("error-msg");
    elementoErro.textContent = mensagem;
}
