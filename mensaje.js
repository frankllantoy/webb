document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.opacity = 1; // Mostrar el mensaje
            msg.style.transform = 'translateY(0)'; // Animación de movimiento
        }, index * 1500); // 1.5 segundos de diferencia entre cada mensaje
    });

    createFlowers(); // Crear flores
});

// Función para crear florecitas animadas
function createFlowers() {
    const flowerCount = 15; // Número de florecitas
    const container = document.querySelector('.message-container');

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('img');
        flower.src = 'img/flower.webp'; // Ruta de la imagen de la florecita
        flower.classList.add('flower');
        
        flower.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        flower.style.top = Math.random() * 100 + 'vh'; // Posición vertical aleatoria
        flower.style.animationDelay = Math.random() * 3 + 's'; // Retraso aleatorio para la animación

        container.appendChild(flower);
    }
}
