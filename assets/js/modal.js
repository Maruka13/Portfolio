const modal = document.getElementById('serviceModal');
const closeBtn = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const services = {
    frontend: {
        title: 'Front-End',
        items: [
            'Crio interfaces modernas com HTML, CSS e JavaScript.',
            'Utilizo frameworks como Angular e React.',
            'Faço design responsivo e acessível.',
            'E muito mais...'
        ]
    },
    backend: {
        title: 'Back-End',
        items: [
            'Desenvolvo APIs REST com Node.js, Java ou Python.',
            'Gerencio bancos de dados SQL e NoSQL.',
            'Autenticação segura com JWT.',
            'E muito mais...'
        ]
    },
    uiux: {
        title: 'Ui/UX Designer',
        items: [
            'Desenvolvo o layout da sua aplicação mobile ou web.',
            'Crio vídeos editados para apresentações de aplicações.',
            'Desenvolvo interfaces UI/UX interativas.',
            'E muito mais...'
        ]
    },
    cnc: {
        title: 'CNC',
        items: [
            'Modelagem de peças para corte CNC.',
            'Configuração de ferramentas.',
            'Otimização de trajetos de usinagem.',
            'Operação de Máquinas CNC.'
        ]
    }
};

//Abre
document.querySelectorAll('.more').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const serviceKey = link.getAttribute('data-service');
        const service = services[serviceKey];

        modalTitle.textContent = service.title;
        modalDescription.innerHTML = service.items.map(
            item => `<li><i class="fa-regular fa-circle-check"></i> ${item}</li>`
        ).join('');

        modal.style.display = 'block';
    });
});

// Fechar
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
