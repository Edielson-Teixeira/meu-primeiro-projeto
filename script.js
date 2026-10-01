// ==========================================
// PEGANDO OS ELEMENTOS DO HTML
// ==========================================

let formulario = document.getElementById("formulario");
let nome = document.getElementById("nome");
let telefone = document.getElementById("telefone");
let cpf = document.getElementById("cpf");
let cep = document.getElementById("cep");
let email = document.getElementById("email");
let senha = document.getElementById("senha");


// ==========================================
// 1. NOME
// ==========================================

nome.addEventListener("input", function() {

    nome.value = nome.value.replace(/[0-9]/g, "");

});


// ==========================================
// 2. CPF
// ==========================================

cpf.addEventListener("input", function() {

    cpf.value = cpf.value.replace(/\D/g, "");

    if (cpf.value.length > 11) {
        cpf.value = cpf.value.substring(0, 11);
    }

    if (cpf.value.length > 9) {

        cpf.value =
            cpf.value.substring(0, 3) + "." +
            cpf.value.substring(3, 6) + "." +
            cpf.value.substring(6, 9) + "-" +
            cpf.value.substring(9, 11);

    } else if (cpf.value.length > 6) {

        cpf.value =
            cpf.value.substring(0, 3) + "." +
            cpf.value.substring(3, 6) + "." +
            cpf.value.substring(6);

    } else if (cpf.value.length > 3) {

        cpf.value =
            cpf.value.substring(0, 3) + "." +
            cpf.value.substring(3);

    }

});


// ==========================================
// 3. TELEFONE
// ==========================================

telefone.addEventListener("input", function() {

    telefone.value = telefone.value.replace(/\D/g, "");

    if (telefone.value.length > 11) {
        telefone.value = telefone.value.substring(0, 11);
    }

    if (telefone.value.length > 7) {

        telefone.value =
            "(" +
            telefone.value.substring(0, 2) +
            ") " +
            telefone.value.substring(2, 7) +
            "-" +
            telefone.value.substring(7);

    } else if (telefone.value.length > 2) {

        telefone.value =
            "(" +
            telefone.value.substring(0, 2) +
            ") " +
            telefone.value.substring(2);

    }

});


// ==========================================
// 4. CEP
// ==========================================

cep.addEventListener("input", function() {

    cep.value = cep.value.replace(/\D/g, "");

    if (cep.value.length > 8) {
        cep.value = cep.value.substring(0, 8);
    }

    if (cep.value.length > 5) {

        cep.value =
            cep.value.substring(0, 5) +
            "-" +
            cep.value.substring(5);

    }

});


// ==========================================
// 5. SENHA
// ==========================================

let contador = document.getElementById("contadorSenha");

let reqTamanho = document.getElementById("req-tamanho");
let reqMaiuscula = document.getElementById("req-maiuscula");
let reqMinuscula = document.getElementById("req-minuscula");
let reqNumero = document.getElementById("req-numero");
let reqEspecial = document.getElementById("req-especial");


senha.addEventListener("input", function() {

    let valor = senha.value;

    contador.textContent = valor.length;


    // MÍNIMO DE 6 CARACTERES

    if (valor.length >= 6) {

        reqTamanho.classList.add("valido");

    } else {

        reqTamanho.classList.remove("valido");

    }


    // LETRA MAIÚSCULA

    if (/[A-Z]/.test(valor)) {

        reqMaiuscula.classList.add("valido");

    } else {

        reqMaiuscula.classList.remove("valido");

    }


    // LETRA MINÚSCULA

    if (/[a-z]/.test(valor)) {

        reqMinuscula.classList.add("valido");

    } else {

        reqMinuscula.classList.remove("valido");

    }


    // NÚMERO

    if (/[0-9]/.test(valor)) {

        reqNumero.classList.add("valido");

    } else {

        reqNumero.classList.remove("valido");

    }


    // CARACTERE ESPECIAL

    if (/[^A-Za-z0-9]/.test(valor)) {

        reqEspecial.classList.add("valido");

    } else {

        reqEspecial.classList.remove("valido");

    }

});


// ==========================================
// 6. ENVIO DO FORMULÁRIO
// ==========================================

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    let valido = true;


    // NOME

    if (nome.value.trim() == "") {

        document.getElementById("erroNome").textContent =
            "Digite seu nome.";

        valido = false;

    } else if (nome.value.trim().length < 3) {

        document.getElementById("erroNome").textContent =
            "O nome deve ter pelo menos 3 caracteres.";

        valido = false;

    } else {

        document.getElementById("erroNome").textContent = "";

    }


    // CPF

    if (cpf.value.length != 14) {

        document.getElementById("erroCpf").textContent =
            "Digite o CPF completo.";

        valido = false;

    } else {

        document.getElementById("erroCpf").textContent = "";

    }


    // TELEFONE

    if (
        telefone.value.length != 14 &&
        telefone.value.length != 15
    ) {

        document.getElementById("erroTelefone").textContent =
            "Digite o telefone completo.";

        valido = false;

    } else {

        document.getElementById("erroTelefone").textContent = "";

    }


    // CEP

    if (cep.value.length != 9) {

        document.getElementById("erroCep").textContent =
            "Digite o CEP completo.";

        valido = false;

    } else {

        document.getElementById("erroCep").textContent = "";

    }


    // E-MAIL

    if (
        !email.value.includes("@") ||
        !email.value.includes(".")
    ) {

        document.getElementById("erroEmail").textContent =
            "Digite um e-mail válido.";

        valido = false;

    } else {

        document.getElementById("erroEmail").textContent = "";

    }


    // SENHA

    if (senha.value.length < 6) {

        document.getElementById("erroSenha").textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        valido = false;

    } else if (!/[^A-Za-z0-9]/.test(senha.value)) {

        document.getElementById("erroSenha").textContent =
            "A senha deve ter pelo menos 1 caractere especial.";

        valido = false;

    } else {

        document.getElementById("erroSenha").textContent = "";

    }


    // ==========================================
    // SE TUDO ESTIVER VÁLIDO
    // ==========================================

    if (valido == true) {

        let novoUsuario = {

            nome: nome.value,
            telefone: telefone.value,
            cpf: cpf.value,
            cep: cep.value,
            email: email.value,
            senha: senha.value

        };


        // PEGAR USUÁRIOS SALVOS

        let usuarios =
            JSON.parse(localStorage.getItem("usuarios")) || [];


        // ADICIONAR NOVO USUÁRIO

        usuarios.push(novoUsuario);


        // SALVAR NO LOCALSTORAGE

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        // MENSAGEM DO MODAL

        mensagemModal.textContent =
            "Usuário " +
            nome.value +
            " cadastrado com sucesso!";


        abrirModal();


        // LIMPAR FORMULÁRIO

        formulario.reset();


        // ATUALIZAR LISTA

        mostrarUsuarios();

    }

});


// ==========================================
// 7. MODAL
// ==========================================

let modal = document.getElementById("modal");

let mensagemModal =
    document.getElementById("mensagemModal");


function abrirModal() {

    modal.style.display = "flex";

}


function fecharModal() {

    modal.style.display = "none";

}


// BOTÃO X

document.getElementById("fecharX")
    .addEventListener("click", function() {

        fecharModal();

    });


// BOTÃO ENTENDIDO

document.getElementById("entendido")
    .addEventListener("click", function() {

        fecharModal();

    });


// CLICAR FORA DA CAIXA

modal.addEventListener("click", function(e) {

    if (e.target == modal) {

        fecharModal();

    }

});


// TECLA ESC

document.addEventListener("keydown", function(e) {

    if (e.key == "Escape") {

        fecharModal();

    }

});


// ==========================================
// 8. MOSTRAR USUÁRIOS
// ==========================================

function mostrarUsuarios() {

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];
        


    let lista =
        document.getElementById("listaUsuarios");


    lista.innerHTML =
        "<h2>Usuários Cadastrados</h2>";


    for (let i = 0; i < usuarios.length; i++) {

        let usuario = usuarios[i];


        let div =
            document.createElement("div");


        div.classList.add("usuario");


        div.innerHTML =
            "<p><strong>Nome:</strong> " +
            usuario.nome +
            "</p>" +

            "<p><strong>Telefone:</strong> " +
            usuario.telefone +
            "</p>" +

            "<p><strong>CPF:</strong> " +
            usuario.cpf +
            "</p>" +

            "<p><strong>CEP:</strong> " +
            usuario.cep +
            "</p>" +

            "<p><strong>E-mail:</strong> " +
            usuario.email +
            "</p>";


        lista.appendChild(div);

    }

}


// ==========================================
// 9. CARREGAR USUÁRIOS
// ==========================================

mostrarUsuarios();