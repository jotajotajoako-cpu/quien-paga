const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hacer que el botón "No" se escape
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Acción al presionar "Yes"
yesBtn.addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! Ya pedimos');

});
