document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.acordeao .item');

    items.forEach(item => {
        const tituloinfo = item.querySelector('.tituloinfo');
        tituloinfo.addEventListener('click', () => {
            const assunto = item.querySelector('.assunto');
            const isOpen = assunto.style.display === 'block';

            document.querySelectorAll('.acordeao .assunto').forEach(c => c.style.display = 'none');
            
            if (!isOpen) {
                assunto.style.display = 'block';
            }
        });
    });
});
