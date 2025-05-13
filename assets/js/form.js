emailjs.init("vIK6rJQggmrOPe0Kq");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Envia o formulário usando EmailJS
        emailjs.sendForm("service_97dfnqo", "template_e8arpgj", form)
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                form.reset(); // limpa os campos
            }, (error) => {
                console.error("Erro ao enviar a mensagem:", error);
                alert("Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.");
            });
    });
});
