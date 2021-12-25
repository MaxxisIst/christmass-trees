const buttonsOrder = document.querySelectorAll('.product-button-order');
const overlayOrder = document.querySelector('.overlay-order');
const order = overlayOrder.querySelector('.modal-order');

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        order.value = buttonOrder.dataset.order;
    })
});

overlayOrder.addEventListener('click', event => {
    const target = event.target;
    console.log('target:', target);
    if (target === overlayOrder || target.closest('.modal-close')) {
        overlayOrder.classList.remove('overlay_active');
    }
});