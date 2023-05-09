;(function() {

    window.addEventListener('load', () => {
        
        // ---- анимация стрелочки на форме обратной связи ----

        const contactFormArrow = document.querySelector('.feedback__arrow img');
        const screenHeight = document.documentElement.clientHeight;
        let isAnimated = false;
    
        const animateWhenAppears = (elem, animateClass) => {
            let elemCordY = elem.getBoundingClientRect().y;
            let elemHeight = elem.offsetHeight;

            if (!isAnimated) {
                if (elemCordY <= screenHeight - 100 && elemCordY > 0) {
                    elem.classList.add(animateClass); 
                    isAnimated = true;
                } 
            } else {
                if (elemCordY <= -elemHeight || elemCordY >= screenHeight) {
                    elem.classList.remove(animateClass); 
                    isAnimated = false;
                }
            }
    
        };

        // ---- анимация контента ----

        const animItems = document.querySelectorAll('._anim-items');

        if (animItems.length > 0){
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll(){
                for (let index = 0; index < animItems.length; index++) {
                    const animItem = animItems[index];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 100;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;

                    if(animItemHeight > window.innerHeight){
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }
                    if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                        animItem.classList.add('_active');
                    }else{
                        animItem.classList.remove('_active');
                    }
                }
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
            }
            animOnScroll();
        }
    
        window.addEventListener('scroll', () => {
            if (document.documentElement.clientWidth > 768) { 
                animateWhenAppears(contactFormArrow, 'feedback__arrow--slide');
            }
        });

        animateWhenAppears(contactFormArrow, 'feedback__arrow--slide');

    });
    
})()