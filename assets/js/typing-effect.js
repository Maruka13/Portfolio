document.addEventListener("DOMContentLoaded", () => {
    const words = [
      " Engenheira de Software. ",
      " Técnica em Mecatrônica. ",
      " Desenvolvedora Web. ",
      " Programadora CNC. ",
      " Agente Comunitária de Saúde. "
    ];

    /* const words = [
      " Software Engineer. ",
      " Mechatronics Technician. ",
      " Web Developer. ",
      " CNC Programmer. ",
      " ACS. "
    ];*/
  
    const typedText = document.querySelector(".typing-text span");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
  
      if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex--);
      } else {
        typedText.textContent = currentWord.substring(0, charIndex++);
      }
  
      let typeSpeed = isDeleting ? 50 : 100;
  
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pausa após completar palavra
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pausa antes de começar próxima
      }
  
      setTimeout(type, typeSpeed);
    }
  
    type();
  });
  