// Необходим скрипт, если вы хотите увеличить картинку при клике вместо наведения
document.addEventListener('DOMContentLoaded', function () {
    var zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            this.classList.toggle('zoomed');
        });
    });
});


// // Функция для открытия модального окна
// function openModal(event) {
//     var modal = document.getElementById('myModal');
//     var modalImg = document.getElementById('modalImg');
//     modal.style.display = "block";
//     modalImg.src = event.target.src;
// }

// // Функция для закрытия модального окна
// function closeModal() {
//     document.getElementById('myModal').style.display = "none";
// }

// // Добавляем обработчики событий для всех изображений с классом myImg
// var images = document.getElementsByClassName('myImg');
// for (var i = 0; i < images.length; i++) {
//     images[i].addEventListener('click', openModal);
// }
// // 


function openModal(event) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    var modalText = document.getElementById('modalText');

    modal.style.display = "block";
    modalImg.src = event.target.src;
    modalText.textContent = event.target.getAttribute('data-answer');
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var images = document.getElementsByClassName('myImg');
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', openModal);
}