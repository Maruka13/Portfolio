  const certData = {
    backend: [
      "ex 1",
      "ex 2",
      "ex 3"
    ],
    frontend: [
      "ex 1",
      "ex 2",
      "ex 3"
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
