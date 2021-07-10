window.addEventListener('load', () => {
    let b = document.body.style;
    let mask = document.querySelector('.mask');

    mask.classList.add('hide');
    setTimeout(() => {
        b.overflowY = 'overlay';
        b.postion = "relative";

        mask.remove();
    }, 500)
});

