const buttonsOrder = document.querySelectorAll('.product-button-order');
const overlayOrder = document.querySelector('.overlay-order');
const order = overlayOrder.querySelector('.modal-order');
const buttonConsult = document.querySelector('.header-consultation-btn');
const titleOrder = document.querySelector('.modal-title');
const titleConsult = document.querySelector('.modal-title-consult');

buttonConsult.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    titleConsult.classList.add('modal-title-consult_active');
    order.value = buttonConsult.dataset.order;
})

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        titleOrder.classList.add('modal-title_active');
        order.value = buttonOrder.dataset.order;
    })
});

overlayOrder.addEventListener('click', event => {
    const target = event.target;
    // console.log('target:', target);
    if (target === overlayOrder || target.closest('.modal-close')) {
        overlayOrder.classList.remove('overlay_active');
        titleOrder.classList.remove('modal-title_active');
        titleConsult.classList.remove('modal-title-consult_active');
    }
});