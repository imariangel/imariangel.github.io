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

function reveal() {
    var reveals = document.querySelectorAll("#reveal");
    var sectionOne = document.querySelector(".section-one");
    var emailDown = document.querySelector(".email-down")
    var emailMiddleDown = document.querySelector(".email-down-middle")
    var sectionOneTop = sectionOne.getBoundingClientRect().top;

    console.log(sectionOneTop)

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    if(sectionOneTop < -150)
    {
        console.log("active")
        emailDown.classList.add("active");
        emailMiddleDown.classList.add("active")
    }
    else if(sectionOneTop > -150)
    {
        console.log("remove")
        emailDown.classList.remove("active");
        emailMiddleDown.classList.remove("active")
    }
  }

window.addEventListener("scroll", reveal);
reveal();