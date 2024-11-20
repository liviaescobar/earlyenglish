// Seleciona todos os elementos com a classe 'painel-button' e aplica um loop para adicionar eventos a cada botão
document.querySelectorAll('.painel-button').forEach(button => {

    // Adiciona um listener de evento 'click' a cada botão
    button.addEventListener('click', () => {

        // Seleciona o próximo elemento irmão no DOM (presume-se que seja o conteúdo do acordeão)
        const accordionContent = button.nextElementSibling;

        // Alterna a classe 'active' no botão (ativa/desativa o estado visual ou funcional)
        button.classList.toggle('active');

        // Verifica se o botão tem a classe 'active' para determinar o comportamento do acordeão
        if (button.classList.contains('active')) {
            // Se ativo, ajusta a altura máxima do conteúdo para o tamanho total do scroll (desdobra o acordeão)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            // Se não estiver ativo, define a altura máxima como 0 (recolhe o acordeão)
            accordionContent.style.maxHeight = 0;
        }
    });
});
