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
      "ex 1",
      "ex 2",
      "ex 3"
    ],
     outros: [
      "ex 1",
      "ex 2",
      "ex 3"
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
