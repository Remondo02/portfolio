function init() {

  /**
  Verification is the browser is IE. If it's IE, add specific classes.
   */
  const ua = window.navigator.userAgent;
  const isIE = /MSIE|Trident/.test(ua);
  /**
  If it's IE, add specific classes.
   */
  if (isIE) {
    document.documentElement.classList.add('ie')
  }

  /**
  Add a class on the document Element that trigger the animation for the logo, and an event listener to check if the DOM is loaded, in which case various functions are executed.
   */
  document.documentElement.classList.add('reveal-loaded')
  window.addEventListener('DOMContentLoaded', function () {
    homeTimeline();
    splitScroll();
    navSlide();
    smoothScroll();
    lightBoxContainer();
  })

  /**
  Function using the TimelineMax GSAP librairy (https://greensock.com/timelinemax/) for complex sequencing animations. The first argument is the element in which you want the effet(s) to be applied. The second is the duration of the effect(s), the third, an object, contain the options you want for the selected element, such as the opacity, the scale or the axis. The fourth option is the delay between each animations of the same triggered elements, and finally the fifth is the time which separe the previous element from the current one.
   */
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

  /**
  Function using ScrollMagic librairy (https://scrollmagic.io/) to fade elements using trigger element or trigger hooks. For each new animation, you declare a new ScrollMagic scene. The argument stores an object which has various properties such as the triggerElement or the triggerHook. You then add a setClassToggle which will be the element to display with specific options, and finally add it to the controller created and stored beforehand in a variable.
   */
  const splitScroll = () => {

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '.about'
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

  /**
  Function showing the burger menu with a fade-in effect applied on each item.
   */
  const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      /**
      For each selected element, by default it will add the styles stored in the else statement. In case the style is already applied, the if statement set the animation empty.
       */
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

  /**
  Function using Smooth-Scroll (https://github.com/cferdinandi/smooth-scroll), another usefull JS librairy, for easy set-ups smooth-scroll elements. The first parameter(s) is/are the selected element(s) in which you want the smooth Scroll to be applied; the second element, an object here, contain the speed of the animation.
   */
  const smoothScroll = () => {

    const scroll = new SmoothScroll('.navbar, .about__details__contact, a[href*="#"]', {
      speed: 800
    });
  }

  /**
  Function creating a lightbox effect, in which all the selected elements related to the images (screenshots of the projects) are displayed as well.
   */
  const lightBoxContainer = () => {
    /**
    In case the browser is IE, the function return an empty string to avoid compatibility issues.
     */
    if (isIE) {
      return '';
    } else {
      /**
      Creating the various elements, including the ligtbox container, and the container that will later on contained the titles, links, images, content and modal close elements.
       */
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);
      const container = document.createElement('div');
      container.id = 'lbContainer';
      lightbox.appendChild(container);
      const images = document.querySelectorAll('.portfolio__gallery__container img');
      /**
      Loop in which selected elements related to the images are stored in order to be used later on.
       */
      images.forEach(image => {
        const titles = image.parentElement.parentElement.childNodes[3].firstElementChild;
        const content =
          image.parentElement.parentElement.childNodes[3].childNodes[3];
        const link = image.parentElement.parentElement.childNodes[3].childNodes[5];
        const modalClose = image.parentElement.parentElement.childNodes[3].childNodes[6].nextElementSibling;
        /**
        Add an event listener for the selected image, and create an element which get the source file based on the clicked image.
         */
        image.addEventListener('click', e => {
          lightbox.classList.add('active');
          container.classList.add('active');
          const img = document.createElement('img');
          img.src = image.src;
          while (container.firstChild) {
            container.removeChild(container.firstChild)
          }
          /**
          Append selected children in the container which is contained in the lightbox element.
           */
          container.appendChild(img);
          container.appendChild(titles);
          container.appendChild(content);
          container.appendChild(link);
          container.appendChild(modalClose);
        });
        /**
        Add an event listener on the ligthbox & container which remove the class active when clicked.
         */
        modalClose.addEventListener('click', e => {
          lightbox.classList.remove('active');
          container.classList.remove('active');
        });
      })
      /**
      Event listener which prevent another targeted element to be clicked while the current target is active and displayed.
       */
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