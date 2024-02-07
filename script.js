// Необходим скрипт, если вы хотите увеличить картинку при клике вместо наведения
document.addEventListener('DOMContentLoaded', function () {
    var zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            this.classList.toggle('zoomed');
        });
    });
});
