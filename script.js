document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.particles');
    const speedSelector = document.getElementById('speed');

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 5 + 1; // Размер частицы
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.left = `${Math.random() * 100}vw`;
            particlesContainer.appendChild(particle);
        }
    }

    createParticles(); // Создание начальных частиц

    // Анимация частиц
    function animateParticles() {
        const particles = document.querySelectorAll('.particle');
        let speedMultiplier = 1;

        speedSelector.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            switch (selectedValue) {
                case '20%':
                    speedMultiplier = 0.2;
                    break;
                case '40%':
                    speedMultiplier = 0.4;
                    break;
                case '60%':
                    speedMultiplier = 0.6;
                    break;
                case '80%':
                    speedMultiplier = 0.8;
                    break;
                case '100%':
                    speedMultiplier = 1;
                    break;
                case 'TURBO':
                    speedMultiplier = 2; // Ускорение для TURBO
                    break;
            }
        });

        function moveParticles() {
            particles.forEach(particle => {
                const top = parseFloat(particle.style.top);
                const newTop = (top - (0.5 * speedMultiplier)) % 100;
                particle.style.top = `${newTop}vh`;
                if (newTop < -1) {
                    particle.style.top = '100vh';
                }
            });
            requestAnimationFrame(moveParticles);
        }

        moveParticles();
    }

    animateParticles(); // Запуск анимации частиц

    // Открытие и закрытие модального окна
    const infoButton = document.querySelector('.info-button');
    const modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.modal-close');

    infoButton.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
    });

    // Загрузка видео
    const loadVideoButton = document.getElementById('loadVideo');
    const videoFrame = document.getElementById('videoFrame');
    const videoUrlInput = document.getElementById('videoUrl');

    loadVideoButton.addEventListener('click', () => {
        const videoUrl = videoUrlInput.value;
        const videoId = videoUrl.split('v=')[1]?.split('&')[0]; // Извлечение ID видео
        if (videoId) {
            videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        } else {
            alert('Введите корректный URL видео');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const turboSelector = document.getElementById('speed');
    const passwordContainer = document.querySelector('.password-container');
    const activateTurboButton = document.getElementById('activateTurbo');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const turboValue = "TURBO";

    const correctPassword = "KgXCjg412.vv"; // Замените на нужный пароль

    turboSelector.addEventListener('change', function() {
        if (this.value === turboValue) {
            passwordContainer.classList.remove('hide');
        } else {
            passwordContainer.classList.add('hide');
        }
    });

    activateTurboButton.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            alert("Режим TURBO активирован!");
            passwordContainer.classList.add('hide');
            turboSelector.value = turboValue;
            // Дополнительные действия для активации TURBO режима
        } else {
            passwordError.classList.remove('hide');
        }
    });
});
