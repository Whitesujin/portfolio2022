$(function(){
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('on');
        $(this).parents().find('.nav').addClass('show');
    });
    $('.btn-clse, .menu__link').on('click', function () {
        $(this).parents().find('.nav').removeClass('show');
        $('.btn-menu').removeClass('on');
    });


    const observeItems = document.querySelectorAll(".n-motion");
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("n-active");
                observer.unobserve(entry.target)
            }
        })
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }
    const myObserver = new IntersectionObserver(callback, options);
        observeItems.forEach(animate => {
        myObserver.observe(animate)
    })
});
