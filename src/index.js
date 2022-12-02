import throttle from 'lodash.throttle';

const throttleScroll = throttle(scrollAbout, 700);

const ref = {
  modalOpen: document.querySelectorAll('[data-modal-open]'),
  modalClose: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('.backdrop'),
  about: document.querySelector('.about__container'),
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
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

window.addEventListener('scroll', throttleScroll);
//добавить throttle!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

async function scrollAbout(e) {
  const documentRect = ref.about.firstElementChild.getBoundingClientRect();
  // console.log(documentRect);
  // console.log(document.documentElement.clientHeight);
  const delay = 300;
  if (
    documentRect.bottom <
    document.documentElement.clientHeight - documentRect.height
  ) {
    window.removeEventListener('scroll', throttleScroll);
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
