const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active')
    navigation.classList.toggle('header-nav_active')
})