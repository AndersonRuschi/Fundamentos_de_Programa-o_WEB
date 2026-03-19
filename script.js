// Mostra ou esconde o menu
function toggleMenuTema() {
    const menu = document.getElementById("menuTema");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Define o tema escolhido
function definirTema(tema) {
    const body = document.body;

    if (tema === "escuro") {
        body.classList.add("escuro");
        localStorage.setItem("tema", "escuro");
    } else {
        body.classList.remove("escuro");
        localStorage.setItem("tema", "claro");
    }

    // Fecha o menu após escolha
    document.getElementById("menuTema").style.display = "none";
}

// Fecha o menu ao clicar fora
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menuTema");
    const container = document.querySelector(".tema-container");

    if (!container.contains(event.target)) {
        menu.style.display = "none";
    }
});

function aplicarTemaSalvo() {
    const tema = localStorage.getItem("tema");

    // Sempre limpa antes (evita conflito)
    document.body.classList.remove("escuro");

    if (tema === "escuro") {
        document.body.classList.add("escuro");
    }
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", aplicarTemaSalvo);

// Função para validação e envio dos e-mails
function enviarEmail() {
    // Captura os valores digitados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return false; // Impede envio
    }

    // validação do formato de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail é válido
    if (!emailValido.test(email)) {
        alert("E-mail inválido!");
        return false; // Impede envio
    }

    //dados que serão enviados
    const dados = {
        from_name: nome,
        from_email: email,
        message: mensagem
    };

    /*
        //Enviaria os e-mails utilizando o EmailJS
        emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", dados)
            .then(function(response) {
                // Sucesso
                alert("Mensagem enviada com sucesso!");

                // Limpa formulário
                document.getElementById("formContato").reset();
            })
            .catch(function(error) {
                // Erro
                alert("Erro ao enviar. Tente novamente.");
                console.error("Erro:", error);
            });
    */

    // Se a validação do formulário for correta.
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos do formulário
    document.getElementById("formContato").reset();

    return false; // impede reload da página
}