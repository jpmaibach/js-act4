const body = document.body;

modoOscuroBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modoOscuroBtn.textContent = 'Modo Walter White';
    } else {
        modoOscuroBtn.textContent = 'Modo El señor de la nocheeee!';
    }
});

