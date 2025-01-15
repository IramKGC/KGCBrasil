var video = document.getElementById('videoPlayer');

    function playVideo() {
        // Mostrar el video
        video.style.display = 'block';

        // Reproducir el video
        video.play();

        // Activar el modo pantalla completa
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari y Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }

        // Evento para pausar el video al presionar la tecla Esc
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) { // Código de la tecla Esc
                video.pause();
                video.style.display = 'none';
                exitFullscreen();
            }
        });

        // Evento para pausar el video al salir del modo pantalla completa
        document.addEventListener('fullscreenchange', function() {
            if (!document.fullscreenElement) {
                video.pause();
                video.style.display = 'none';
            }
        });

        document.addEventListener('webkitfullscreenchange', function() {
            if (!document.webkitFullscreenElement) {
                video.pause();
                video.style.display = 'none';
            }
        });

        document.addEventListener('mozfullscreenchange', function() {
            if (!document.mozFullScreenElement) {
                video.pause();
                video.style.display = 'none';
            }
        });

        document.addEventListener('MSFullscreenChange', function() {
            if (!document.msFullscreenElement) {
                video.pause();
                video.style.display = 'none';
            }
        });
    }

    // Función para salir del modo pantalla completa
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }