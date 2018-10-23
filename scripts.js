const arrowLeftDevs = document.querySelector('.devices__paginator .paginator__arrow_left');
const arrowRightDevs = document.querySelector('.devices__paginator .paginator__arrow_right');
const panelCountDevs = document.querySelectorAll('.devices__panel').length;
const devices = document.querySelector('.devices');
const pagiantorDevs = document.querySelector('.devices__paginator');
let currentPageDevs = 1;

pagiantorDevs.classList.toggle('paginator_hide', panelCountDevs < 7);

arrowRightDevs.addEventListener('click', function () {
    currentPageDevs += 1;
    arrowLeftDevs.classList.toggle('paginator__arrow_disabled', currentPageDevs === 1);
    devices.scroll({
      top: 0,
      left: 1366,
      behavior: 'smooth'
    });
});

arrowLeftDevs.addEventListener('click', function () {
  if (currentPageDevs > 1) {
    currentPageDevs -= 1;
    arrowLeftDevs.classList.toggle('paginator__arrow_disabled', currentPageDevs === 1);
    devices.scroll({
      top: 0,
      left: -1366,
      behavior: 'smooth'
    });
  }
});

const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const panelCountScens = document.querySelectorAll('.scenarios__panel').length;
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
const pagiantorScens = document.querySelector('.scenarios__paginator');
let currentPage = 1;

pagiantorScens.classList.toggle('paginator_hide', panelCountScens <= 9);

arrowRightScens.addEventListener('click', function () {
  if (currentPage < pageCountScens) {
    currentPage += 1;
    arrowRightScens.classList.toggle('paginator__arrow_disabled', currentPage === pageCountScens);
    arrowLeftScens.classList.toggle('paginator__arrow_disabled', currentPage === 1);
    scenarios.scroll({
      top: 0,
      left: 645,
      behavior: 'smooth'
    });
  }
});

arrowLeftScens.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage -= 1;
    arrowRightScens.classList.toggle('paginator__arrow_disabled', currentPage === pageCountScens);
    arrowLeftScens.classList.toggle('paginator__arrow_disabled', currentPage === 1);
    scenarios.scroll({
      top: 0,
      left: -645,
      behavior: 'smooth'
    });
  }
});

// dont know if it works at all

const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');

selectButton.addEventListener('click', function() {
  popup.classList.toggle('filter__select-popup_open');
});

let widths = '';
window.addEventListener('scroll', function() {
    widths += document.querySelectorAll('body')[0].offsetWidth;
    document.querySelector('.stats').innerHTML = widths;
});

selectOptions.forEach(o => {
  o.addEventListener('click', function(e) {
    document.querySelector('#' + e.target.dataset.group).checked = true;

    selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
    e.target.classList.toggle('filter__select-item_checked', true);
    popup.classList.toggle('filter__select-popup_open', false);
    selectButtonText.innerText = e.target.innerText;
  })
});

document.querySelector('.menu__icon').addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('menu_open');
});

document.querySelectorAll('.panel_temp, .panel_lamp, .panel_floor').forEach((p) => {
  p.addEventListener('click', () => {
    const selectors = ['.modal_temp', '.modal_light', '.modal_knob']
    const index = ['panel_temp', 'panel_lamp'].findIndex(cn => p.classList.contains(cn));
    const selector = selectors[index < 0 ? selectors.length - 1 : index];
    showModal(selector);
  })
});

let listenersAdded = false;

const showModal = async function(selector) {
  document.querySelector(selector).classList.toggle('modal_open', true);
  document.querySelector('body').style.overflow = 'hidden';

  if (listenersAdded) return;

  import('./popup.js').then((a) => {
    a.default();
    listenersAdded = true;
  });
}
