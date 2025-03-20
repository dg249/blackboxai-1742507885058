// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classes de animação aos elementos de benefícios
    const benefitItems = document.querySelectorAll('ul li');
    benefitItems.forEach((item, index) => {
        item.classList.add('benefit-card');
        // Adiciona um pequeno delay para cada item aparecer sequencialmente
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // Configura o botão do WhatsApp
    const whatsappButton = document.querySelector('.fa-whatsapp').parentElement;
    whatsappButton.classList.add('whatsapp-float');
    
    // Adiciona o número do WhatsApp ao link (substitua pelo número correto)
    whatsappButton.href = "https://wa.me/5527999999999"; // Substitua pelo número correto

    // Adiciona classe de animação ao botão CTA
    const ctaButton = document.querySelector('[href="#"].bg-red-600');
    if (ctaButton) {
        ctaButton.classList.add('cta-button');
    }

    // Função para adicionar efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== "#") {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adiciona efeito de hover aos elementos com a classe hover-scale
    const scaleElements = document.querySelectorAll('.hover-scale');
    scaleElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });

    // Adiciona classe soft-shadow aos elementos que precisam de sombra
    const shadowElements = document.querySelectorAll('.bg-red-600');
    shadowElements.forEach(element => {
        element.classList.add('soft-shadow');
    });

    // Função para mostrar mensagem de confirmação antes de sair da página
    window.addEventListener('beforeunload', function(e) {
        // Comentado para não interferir durante o desenvolvimento
        // const confirmationMessage = 'Tem certeza que deseja sair?';
        // e.returnValue = confirmationMessage;
        // return confirmationMessage;
    });

    // Adiciona efeito de parallax ao scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-gradient');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// Função para validar e enviar formulário (se necessário adicionar posteriormente)
function validateForm(event) {
    event.preventDefault();
    // Adicione aqui a lógica de validação do formulário
    return false;
}

// Função para atualizar o contador de visualizações (exemplo)
function updateViewCounter() {
    const counter = localStorage.getItem('pageViews') || 0;
    localStorage.setItem('pageViews', parseInt(counter) + 1);
}

// Executa a função de contador de visualizações
updateViewCounter();