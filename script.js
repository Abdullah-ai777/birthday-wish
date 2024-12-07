document.addEventListener('DOMContentLoaded', () => {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseover', () => {
            balloon.style.transform = 'scale(1.2)';
            balloon.style.transition = 'transform 0.2s';
        });
        balloon.addEventListener('mouseout', () => {
            balloon.style.transform = 'scale(1)';
        });
    });
});
