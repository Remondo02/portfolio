const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}

navSlide();

const scroll = new SmoothScroll('.navbar, .about__details__contact, a[href*="#"]', {
  speed: 800
});

const selectElement = (element) => document.querySelector(element);

selectElement('.burger').addEventListener('click', () => {
  selectElement('.burger').classList.toggle('active');

});


const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.portfolio__gallery__container img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img);
  })
})

lightbox.addEventListener('click', e => {
  if (e.target != e.currentTarget) {
    return
  }
  lightbox.classList.remove('active');
})


function splitScroll() {

  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '.about',
  })
    .setClassToggle('.about__details__heading', 'fade-in')
    // .addIndicators({
    //   name: 'fade about',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: 'blockquote'
  })
    .setClassToggle('.about__details__content', 'fade-in')
    // .addIndicators({
    //   name: 'fade content',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.percent50',
    triggerHook: 0.4
  })
    .setClassToggle('.about__details__contact', 'fade-in')
    // .addIndicators({
    //   name: 'fade hire',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.about__details__contact',
    triggerHook: 0.2
  })
    .setClassToggle('.portfolio__gallery', 'fade-in')
    // .addIndicators({
    //   name: 'fade portfolio',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.contact'
  })
    .setClassToggle('.contact__info', 'fade-in')
    // .addIndicators({
    //   name: 'fade contact info',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.contact__info'
  })
    .setClassToggle('.form-content', 'fade-in')
    // .addIndicators({
    //   name: 'fade form',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.contact__info'
  })
    .setClassToggle('.form-header', 'fade-in')
    // .addIndicators({
    //   name: 'fade form-header',
    //   colorTrigger: 'black',
    //   indent: 350,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.form-message'
  })
    .setClassToggle('input[type="submit"]', 'fade-in')
    // .addIndicators({
    //   name: 'fade submit',
    //   colorTrigger: 'black',
    //   indent: 350,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.form-message',
    triggerHook: 0.4
  })
    .setClassToggle('.social', 'fade-in')
    // .addIndicators({
    //   name: 'fade social',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75c695'
    // })
    .addTo(controller);
}

splitScroll();