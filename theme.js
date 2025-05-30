// Função para alternar o tema
function toggleTheme() {
    const html = document.documentElement;
    const checkbox = document.getElementById('theme-checkbox');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        checkbox.checked = true; // O botão vai para o lado direito (estado light)
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        checkbox.checked = false; // O botão vai para o lado esquerdo (estado dark)
    }
}

// Função para definir o tema com base na preferência salva ou do sistema
function setTheme() {
    const html = document.documentElement;
    const checkbox = document.getElementById('theme-checkbox');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        html.classList.add('dark');
         checkbox.checked = false; // O botão vai para o lado esquerdo (estado dark)
    } else if (savedTheme === 'light') {
        html.classList.remove('dark');
        checkbox.checked = true; // O botão vai para o lado direito (estado light)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        checkbox.checked = true; // O botão vai para o lado esquerdo (estado dark)
    }
}

// Função para abrir/fechar o menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('open');
    
    // Bloquear/desbloquear rolagem quando o menu está aberto
    if (mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Atualizar o ano atual no footer
function updateCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Definir o tema inicial
    setTheme();
    
    // Adicionar event listener para o botão de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // Adicionar event listener para o botão do menu mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Fechar o menu mobile quando um link é clicado
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });
    
    // Atualizar o ano atual no footer
    updateCurrentYear();
    
    // Atualizar o tema quando a preferência do sistema mudar
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme')) {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    });
});