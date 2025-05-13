document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede envio padrão

        // Captura os campos do formulário
        const inputs = form.querySelectorAll("input, textarea");
        const nome = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const assunto = inputs[2].value.trim() || `Novo projeto de ${nome}`;
        const mensagem = inputs[3].value.trim();

        // Validação básica
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Monta o corpo do email
        const body = `
Nome: ${nome}
Email: ${email}

Mensagem:
${mensagem}
      `;

        // Cria o link mailto
        const mailtoLink = `mailto:emanuelle_carollina@hotmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;

        // Abre o cliente de email
        window.location.href = mailtoLink;

        // (Opcional) limpa o formulário
        form.reset();
    });
});