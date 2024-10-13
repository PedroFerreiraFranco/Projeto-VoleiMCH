// Intersection Observer para animar ao rolar a página
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

// Observa todas as divs com a classe 'animate'
document.querySelectorAll('.animate').forEach(element => {
  observer.observe(element);
});

// Captura o evento de submit do formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Chama a função para enviar a mensagem
  sendMessage();
});

// Função para enviar mensagem pelo WhatsApp
function sendMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const whatsappNumber = '5535988061244'; // Insira o número de WhatsApp aqui
  const whatsappMessage = encodeURIComponent(`Olá, meu nome é ${name}. Mensagem: ${message}`);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Abre a URL do WhatsApp
  window.open(whatsappURL, '_blank');
}
