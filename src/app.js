function init() {


  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);

  if (isIE) {
    document.documentElement.classList.add('ie')
  }
  document.documentElement.classList.add('reveal-loaded')
  window.addEventListener('DOMContentLoaded', function () {
    homeTimeline();
    splitScroll();
    navSlide();
    smoothScroll();
    lightBoxContainer();
  })

  const homeTimeline = () => {

    const tl = new TimelineMax();

    tl.from('#logo', 2, {
      opacity: 0,
      scale: .5,
      ease: Power2.easeOut
    })
      .staggerFrom('.home__details__job', 1, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
      }, 0.5, "+=1")
      .staggerFrom('.icons a', 1, {
        opacity: 0,
        y: -40,
        ease: Power2.easeInOut
      }, 0.2, "-=0.5")
      .staggerFrom('nav', 1, { opacity: 0, y: '-100%' }, { opacity: 100, y: '0%' }, "-=0.5")
  }

  const splitScroll = () => {

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '.about',
    })
      .setClassToggle('.about__details__heading', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: 'blockquote'
    })
      .setClassToggle('.about__details__content', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.percent50',
      triggerHook: 0.4
    })
      .setClassToggle('.about__details__contact', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.about__details__contact',
      triggerHook: 0.2
    })
      .setClassToggle('.portfolio__gallery', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.contact'
    })
      .setClassToggle('.contact__info', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.contact__info'
    })
      .setClassToggle('.form-content', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.contact__info'
    })
      .setClassToggle('.form-header', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.form-message',
      triggerHook: 0.6
    })
      .setClassToggle('input[type="submit"]', 'fade-in')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.form-message',
      triggerHook: 0.6
    })
      .setClassToggle('.social', 'fade-in')
      .addTo(controller);
  }

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

  const smoothScroll = () => {

    const scroll = new SmoothScroll('.navbar, .about__details__contact, a[href*="#"]', {
      speed: 800
    });

    const selectElement = (element) => document.querySelector(element);
    selectElement('.burger').addEventListener('click', () => {
      selectElement('.burger').classList.toggle('active');
    });
  }

  const lightBoxContainer = () => {
    if (isIE) {
      return '';
    } else {

      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);
      const container = document.createElement('div');
      container.id = 'lbContainer';
      lightbox.appendChild(container);
      const images = document.querySelectorAll('.portfolio__gallery__container img');

      images.forEach(image => {
        const titles = image.parentElement.parentElement.childNodes[3].firstElementChild;
        const content =
          image.parentElement.parentElement.childNodes[3].childNodes[3];
        const link = image.parentElement.parentElement.childNodes[3].childNodes[5];
        const modalClose = image.parentElement.parentElement.childNodes[3].childNodes[6].nextElementSibling;

        image.addEventListener('click', e => {
          lightbox.classList.add('active');
          container.classList.add('active');
          const img = document.createElement('img');
          img.src = image.src;
          while (container.firstChild) {
            container.removeChild(container.firstChild)
          }
          container.appendChild(img);
          container.appendChild(titles);
          container.appendChild(content);
          container.appendChild(link);
          container.appendChild(modalClose);
        });
        modalClose.addEventListener('click', e => {
          lightbox.classList.remove('active');
          container.classList.remove('active');
        });
      })
      lightbox.addEventListener('click', e => {
        if (e.target != e.currentTarget) {
          return
        }
        lightbox.classList.remove('active');
        container.classList.remove('active');
      });
    }
  }
}

init();



