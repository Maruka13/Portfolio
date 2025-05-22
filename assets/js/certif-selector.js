  const certData = {
    backend: [
      "Curso Web API ASP.NET Core Essencial (.NET 8/.NET 9) - Udemy;",
      "C# Completo e Profissional - Udemy;",
      "NLW Connect - Csharp - Rocketseat;",
      "Curso de Java com AWS Lambda e S3 - Rocketseat;",
      "PHP - Desenvolvimento de uma aplicação em PHP com Laravel seguindo a arquitetura MVC -  Rocketseat;",
      "Curso Lógica de programação: mergulhe em programação com JavaScript - Alura;",
      "Imersão Dev Backend - Alura."
    ],
    frontend: [
      "Web FrontEnd Completpo com HTML, CSS, JS, TS, React e Next 2025 - Udemy;",
      "Imersão Dev 9ª Edição Alura;",
      "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags - Alura;",
      "Curso Lógica de programação: mergulhe em programação com JavaScript - Alura;",
      "NLW Pocket: Mobile - React Native - Rocketseat;",
      "NLW Connect - React - Rocketseat;",
      "Imersão Front-End 2ª Edição - Alura."
    ],
     cnc: [
      "Aperfeiçoamento Profissional - Programação de Centro de Usinagem CNC - SENAI São Paulo;",
      "Aperfeiçoamento Profissional - Programação de Torno CNC - SENAI São Paulo;",
      "Especialização - Programador de Máquina CNC: Fresadora - Instituto Federal de Minas Gerais;",
      "Especialização - Programador de Máquina CNC: Torno - Instituto Federal de Minas Gerais;",
      "Operação e Programação de Torno CNC Cabeçote Móvel - Allied Titanium;",
      "Intensivão 8.0 - Técnicas de Manutenção Preditiva na Indústria 4.0 - TRACTIAN;",
      "Metrologia na Indústria 4.0 - SENAI São Carlos.",
    ],
     outros: [
      "Rocketseat Class - O poder dos dados para devs - Rocketseat;",
      "Introdução ao Microsoft Azure Advanced - DIO;",
      "NLW Connect - Full Stack - Rocketseat;",
      "Imersão IA Alura + Google Gemini - Alura;",
      "Networking Academy Learn-A-Thon 2024 - Cisco;",
      "NLW Pocket: Mobile - React Native - Rocketseat;",
      "Overview Docker - DIO;",
      "Versionamento de Código com Git e GitHub - DIO."
    ],
  };

  function showCerts(area) {
    const container = document.getElementById("certCard");
    container.innerHTML = `
      <div class="tag"><h2>${getAreaTitle(area)}</h2></div>
      <div class="decs">
        ${certData[area].map(cert => `<p>${cert}</p>`).join('')}
      </div>
    `;
  }

  function getAreaTitle(area) {
    switch(area) {
      case 'backend': return 'Desenvolvimento Backend';
      case 'frontend': return 'Desenvolvimento Frontend';
      case 'cnc': return 'Programação CNC';
      case 'outros': return 'Outros Certificados';
      default: return '';
    }
  }

  showCerts('backend');
