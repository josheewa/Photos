const swiper = new Swiper('.swiper', {

    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: true, // should stop playing when user interacts with slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});




const images = [
    "img1", "img2", "img3", "img4", "img5", "img6"
];

images.forEach((val) => {
    const img = document.createElement('img');
    img.src = 'img/' + val + '.png';
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.appendChild(img);
    document.querySelector('.swiper-wrapper').appendChild(slide);
})
// let frontImage = 0;

// document.body.onload = displayImages();

// function displayImages() {
//     document.querySelector('.left').src = 'img/' + images[calcID(frontImage-1)] + '.png';
//     document.querySelector('.center').src = 'img/' + images[frontImage] + '.png';
//     document.querySelector('.right').src = 'img/' + images[calcID(frontImage+1)] + '.png';
// }

// function calcID(num) {
//     if (num >= 0 && num < images.length) {
//         return num;
//     } else if (num < 0) {
//         return images.length - 1;
//     } else {
//         return 0;
//     }
// }

// function next() {
//     document.querySelector('.container').style.transform = 'translateX(-200px)'
//     // frontImage = calcID(frontImage + 1);
//     // displayImages();
// }
// function prev() {
//     // frontImage = calcID(frontImage - 1);
//     // displayImages();
// }
