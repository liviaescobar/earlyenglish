document.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.parentElement.querySelector('.accordion-content');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            toggle.classList.remove('rotate');
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
            document.querySelectorAll('.accordion-toggle').forEach(toggle => toggle.classList.remove('rotate'));
            content.style.display = 'block';
            toggle.classList.add('rotate');
        }
    });
});
