const serviceDescriptions = {
    "Front-End": "Desenvolvimento de interfaces modernas, responsivas e acessíveis usando HTML, CSS, JavaScript, Angular e mais.",
    "Back-End": "Criação de APIs robustas, banco de dados com SQL/MongoDB, autenticação e lógica de negócio com Node.js, C#, etc.",
    "UI/UX Design": "Prototipagem, design centrado no usuário, wireframes e experiência intuitiva com Figma e ferramentas visuais.",
    "CNC": "Modelagem e programação de usinagem CNC para fresadoras, tornos e softwares CAD/CAM."
};

//Abrir 
document.querySelectorAll('.service-item .more').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const title = this.previousElementSibling.textContent;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = serviceDescriptions[title] || "Descrição indisponível.";
        document.getElementById('serviceModal').style.display = "block";
    });
});

//Fechar
document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('serviceModal').style.display = "none";
});

//Fechar click fora
window.addEventListener('click', function (e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

