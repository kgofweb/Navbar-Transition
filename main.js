const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.main-menu');
const links = document.querySelector('.main-menu li');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
});