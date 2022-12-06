import throttle from 'lodash.throttle';
import { langObj } from './js/lng';

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
  heroTopLogo: document.querySelector('.hero__logo-top'),
  heroBottomLogo: document.querySelector('.hero__logo-bottom'),
  langLinkArr: document.querySelectorAll('.header__language-list-link'),
};

console.log(ref.langLinkArr);
/////////////////////////////Запуск анимации/////////////////////////////////

function isShow() {
  ref.heroTopLogo.classList.add('is-show');
  ref.heroBottomLogo.classList.add('is-show');
}
isShow();

/////////////////////////////Модалка/////////////////////////////////

for (let button of ref.modalOpen) {
  button.addEventListener('click', function (e) {
    ref.backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', escapeKeyCloseModal);
    document
      .querySelector('.backdrop')
      .addEventListener('click', backdropCloseModal);
  });
}

ref.modalClose.addEventListener('click', closeModal);

function closeModal(e) {
  ref.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', escapeKeyCloseModal);
  window.removeEventListener('keydown', backdropCloseModal);
}

function escapeKeyCloseModal(e) {
  if (e.code === 'Escape') {
    ref.backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', escapeKeyCloseModal);
    window.removeEventListener('keydown', backdropCloseModal);
  }
}

function backdropCloseModal(e) {
  if (e.target.classList.contains('backdrop')) {
    ref.backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', escapeKeyCloseModal);
    window.removeEventListener('keydown', backdropCloseModal);
  }
}

/////////////////////////////Плавная навигация/////////////////////////////////

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

/////////////// Multilanguages ///////////////////////////////////////////////

// const allLang = ['ru', 'pl', 'de', 'en'];
let allLang = [];

for (link of ref.langLinkArr) {
  //вешаем слушателя событий на все ссылки языков и сразу меняем активный язык
  link.addEventListener('click', e => {
    for (link of ref.langLinkArr) {
      link.classList.remove('header__language-list-link--active');
    }
    e.currentTarget.classList.add('header__language-list-link--active');
    activeLang();
  });
}

function changeActiveLangLink(hash) {
  for (link of ref.langLinkArr) {
    link.classList.remove('header__language-list-link--active');
    if (link.lang === hash) {
      link.classList.add('header__language-list-link--active');
    }
  }
}

function activeLang() {
  let lang = '';
  //определяем какой язык после хэша
  let hash = window.location.hash;
  hash = hash.substr(1);
  //если такого языка в массиве всех языков нет, ставим СТАНДАРТНЫЙ
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ru';

    //меняем активную ссылку на язык
    changeActiveLangLink(hash);
  }
  // добавляем языки в массив всех языков
  for (link of ref.langLinkArr) {
    if (!allLang.includes(link.lang)) {
      allLang.push(link.lang);
    }
    //меняем язык на сайте и после хэша в URL
    if (link.classList.contains('header__language-list-link--active')) {
      lang = link.lang;
      changeLang(lang);
      changeURLLanguage(lang);
    }
  }
}
function changeURLLanguage(lang) {
  location.href = window.location.pathname + '#' + lang;
  // location.reload();
}

function changeLang(lang) {
  for (key in langObj) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.textContent = langObj[key][lang];
    }
  }
}
activeLang();
