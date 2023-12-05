let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo-header');
let introOneText = document.querySelectorAll('.intro-one');
let introtwoText = document.querySelectorAll('.intro-two');
let introthreeText = document.querySelectorAll('.intro-three');
let sectionOneDisplay = document.querySelectorAll('.section-one');


window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        introOneText.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1 ) * 400 )
        })

        setTimeout(() => {
            introOneText.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (index + 1 )*400 )
            })
        }, 2000)

    })

    setTimeout(() => {

        introtwoText.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1 ) * 400 )
        })

        setTimeout(() => {
            introtwoText.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (index + 1 )*400 )
            })
        }, 2000)

    }, 3000)

    setTimeout(() => {

        introthreeText.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1 ) * 400 )
        })


        setTimeout(() => {
            intro.style.top = '-100vh';
        },2000)

    }, 6000)

    console.log(sectionOneDisplay)
    setTimeout(() => {

        sectionOneDisplay.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1 ) * 400 )
        })
    }, 8000)

})