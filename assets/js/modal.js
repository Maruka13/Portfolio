const modal = document.getElementById('serviceModal');
const closeBtn = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const services = {
    frontend: {
    title: 'Front-End',
    items: [
        'Crio interfaces modernas e interativas com HTML5, CSS3 e JavaScript.',
        'Utilizo frameworks e bibliotecas como Angular e React',
        'Desenvolvimento de Single Page Applications.',
        'Implementação de design responsivo para diferentes dispositivos (mobile-first).',
        'Otimização de performance front-end (carregamento, renderização).',
        'Conhecimento em SEO técnico para otimizar a visibilidade.',
        'Implementação de animações e transições para melhorar a experiência do usuário.',
        'Trabalho com sistemas de design.',
        'E muito mais.'
    ]
},
    backend: {
        title: 'Back-End',
        items: [
            'Integrações de Sistemas',
            'Bancos de Dados e Otimização',
            'Desenvolvimento de APIs',
            'Segurança de Aplicações',
            'Infraestrutura e Cloud',
            'Performance e Escalabilidade'
        ]
    },
    integracao: {
        title: 'Integrações',
        items: [
            'Desenvolvimento de integrações via APIs (REST, GraphQL).',
            'Utilização de filas de mensagens (RabbitMQ, Kafka).',
            'Comunicação eficiente e confiável entre aplicações.'
        ]
    },
    BD: {
        title: 'Bancos de Dados',
        items: [
            'Projeto e modelagem de bancos de dados SQL (SQL Server, MySQL, PostgreSQL)',
            'Trabalho com bancos de dados NoSQL (MongoDB)',
            'Criação e otimização de queries SQL e NoSQL.',
            'Garantia de integridade, performance e escalabilidade dos dados.'
        ]
    },
    API: {
        title: 'APIs',
        items: [
            'Criação de APIs eficientes e bem documentadas (RESTful, GraphQL).',
            'Foco em arquitetura, design de endpoints e tratamento de erros.',
            'Versionamento e otimização de performance de APIs.'
        ]
    },
    seguranca: {
        title: 'Segurança',
        items: [
            'Implementação de autenticação e autorização (JWT)',
            'Criptografia de dados sensíveis',
            'Práticas seguras de armazenamento de senhas (hashing, salting)'
        ]
    },
    cloud: {
        title: 'Infra e Cloud',
        items: [
            'Configuração e gerenciamento de infraestrutura cloud (AWS, Azure, GCP).',
            'Escalabilidade, confiabilidade e segurança na nuvem.',
            'Utilização de serviços cloud como EC2, S3 e Lambda.',
            'Adaptação da arquitetura cloud às necessidades do projeto.'
        ]
    },
    perform: {
        title: 'Performance e Escalabilidade',
        items: [
            'Análise e otimização de performance de aplicações backend.',
            'Implementação de estratégias de escalabilidade horizontal e vertical',
            'Garantia de tempos de resposta rápidos e boa experiência do usuário.'
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
