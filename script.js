window.addEventListener('scroll', function() {
    let header = this.document.querySelector('.header');
    // Проверяем, сколько пикселей прокручено
    if (window.scrollY > 100) {
         header.style.backgroundColor = '#55565A';
        //  header.style.paddingTop = '20px'
    // Цвет фона при прокрутке
    } else {
        header.style.backgroundColor = 'transparent'; // Цвет фона при прокрутке
        // Исходный цвет фона
    }
});