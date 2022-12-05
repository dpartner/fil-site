import throttle from 'lodash.throttle';

const throttleScrollAbout = throttle(scrollAbout, 200);
const throttleScrollDelivery = throttle(scrollDelivery, 200);

const ref = {
  modalOpen: document.querySelectorAll('[data-modal-open]'),
  modalClose: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.backdrop'),
  about: document.querySelector('.about__container'),
  delivery: document.querySelector('.delivery__container'),
  mobToggle: document.querySelector('.mob-menu__open-button'),
  mobMenu: document.querySelector('.js-mobile-menu'),
};

for (let button of ref.modalOpen) {
  button.addEventListener('click', function (e) {
    ref.backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', escapeKeyCloseModal);
  });
}

ref.modalClose.addEventListener('click', closeModal);

function closeModal(e) {
  ref.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', escapeKeyCloseModal);
}

function escapeKeyCloseModal(e) {
  if (e.code === 'Escape') {
    ref.backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', escapeKeyCloseModal);
  }
}

const smoothLinks = document.querySelectorAll('[nav]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const kindNav = smoothLink.getAttribute('nav');
    if (kindNav === 'mob') {
      toggleMobileMenu();
    }
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

window.addEventListener('scroll', throttleScrollAbout);
window.addEventListener('scroll', throttleScrollDelivery);
//добавить throttle!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

async function scrollAbout(e) {
  const documentRect = ref.about.firstElementChild.getBoundingClientRect();
  // console.log(documentRect);
  // console.log(document.documentElement.clientHeight);
  const delay = 300;
  if (
    // documentRect.bottom <
    // document.documentElement.clientHeight - documentRect.height
    documentRect.bottom < document.documentElement.clientHeight
  ) {
    window.removeEventListener('scroll', throttleScrollAbout);
    const aboutElements = ref.about.children;
    for (let i = 0; i < aboutElements.length; i += 1) {
      aboutElements[i].classList.add('action');
      if (i !== aboutElements.length - 1) {
        const timer = await timeOut(delay);
      }

      // добавить таймер на каждый елемент
    }
  }
}

function timeOut(delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(delay), delay);
  });
}

async function scrollDelivery(e) {
  const documentRect = ref.delivery.firstElementChild.getBoundingClientRect();
  // console.log(documentRect);
  // console.log(document.documentElement.clientHeight);
  if (
    // documentRect.bottom <
    // document.documentElement.clientHeight - documentRect.height
    documentRect.bottom < document.documentElement.clientHeight
  ) {
    window.removeEventListener('scroll', throttleScrollDelivery);
    const timer = await timeOut(500);
    document.querySelector('.delivery__container').classList.add('is-show');
    const timerSecond = await timeOut(1000);
    document.querySelector('.delivery__text-wrap').classList.add('is-show');
    const timerThird = await timeOut(1500);
    document.querySelector('.deliver__good-wrap').classList.add('is-show');
  }
}

//////////////Mobile Menu

ref.mobToggle.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  if (!ref.mobToggle.classList.contains('is-open')) {
    window.addEventListener('scroll', blockScroll);
  } else {
    window.removeEventListener('scroll', blockScroll);
  }
  ref.mobMenu.classList.toggle('is-open');
  ref.mobToggle.classList.toggle('is-open');
}

function blockScroll() {
  window.scrollTo(0, 0);
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (ref.mobToggle.classList.contains('is-open')) {
    toggleMobileMenu();
  }
});
