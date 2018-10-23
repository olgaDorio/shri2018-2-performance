module.exports = () => {
  const TEMPS = {
  'manual': -10,
  'cold': 0,
  'warm': 23,
  'hot': 30
}

document.querySelectorAll('.modal__filter-item_temp').forEach(l => {
  l.onclick = function() {
    document.querySelector('.adjust-bar_theme_temp').value = TEMPS[this.id];
    document.querySelector('.modal_temp .modal__value').innerHTML = TEMPS[this.id] > 0 ? '+' + TEMPS[this.id] : TEMPS[this.id];
  }
});

document.querySelectorAll('.modal_close').forEach(b => {
  b.onclick = function() {
    document.querySelectorAll('.modal').forEach(m => {
      m.classList.toggle('modal_open', false);
      document.querySelector('body').style.overflow = 'auto';
    });
  }
});

let curValue;
let curRotate;
let maxRotate = 0.42; // 150 градусов
let minRotate = -0.42; // -150 градусов

const MIN_VALUE = 26;
const MAX_VALUE = 35;
const INDICATOR_OFFSET = 265;

const rotateToValue = function(rotate) {
  return Math.floor((Math.abs(rotate * 360 * 1.73 + INDICATOR_OFFSET) / 53) + MIN_VALUE);
}


/**
 * @param {Number} rotate Количество оборотов от нейтрального положения.
 */
function setRotate(rotate) {
  if (rotate > maxRotate) {
    rotate = maxRotate;
  } else if (rotate < minRotate) {
    rotate = minRotate;
  }

  curRotate = rotate;
  curValue = rotateToValue(rotate);

  document.querySelector('.modal_knob .modal__value').innerHTML = '+' + curValue;
  document.querySelector('.knob__value').innerHTML = '+' + curValue;
  document.querySelector('.knob__indicator').style.strokeDasharray = curRotate * 360 * 1.73 + INDICATOR_OFFSET + ' 629';
  document.querySelector('.knob__arrow').style.transform = 'rotate(' + (curRotate * 360) + 'deg)';
}

function getPosition(elem) {
  const rect = elem.getBoundingClientRect();

  return [
    rect.left + (rect.right - rect.left) / 2,
    rect.top + (rect.bottom - rect.top) / 2
  ];
}

function getMouseAngle(event, centerElem) {
  const pos = getPosition(centerElem);
  let cursor = [event.clientX, event.clientY];
  let rad;

  if (event.targetTouches && event.targetTouches[0]) {
    cursor = [event.targetTouches[0].clientX, event.targetTouches[0].clientY];
  }

  rad = Math.atan2(cursor[1] - pos[1], cursor[0] - pos[0]);
  rad += Math.PI / 2;

  return rad;
}

let knobDragged;
let prevAngleRad = null;
let prevRotate = null;

function startDragging(e) {
  e.preventDefault();
  e.stopPropagation();
  const rad = getMouseAngle(e, document.querySelector('.knob_center'));

  knobDragged = true;
  prevAngleRad = rad;
  prevRotate = curRotate;
}

function stopDragging(e) {
  knobDragged = false;
}

function dragRotate(e) {
  if (!knobDragged) {
    return;
  }

  const old = prevAngleRad;
  let rad = getMouseAngle(e, document.querySelector('.knob_center'));
  let delta = rad - old;

  prevAngleRad = rad;

  if (delta < 0) {
    delta += Math.PI * 2;
  }
  if (delta > Math.PI) {
    delta -= Math.PI * 2;
  }

  const deltaRotate = delta / Math.PI / 2;
  const rotate = prevRotate + deltaRotate;

  prevRotate = rotate;
  setRotate(rotate);
}

function setEvtListeners() {
  const elem = document.querySelector('.knob-container');

  elem.addEventListener('mousedown', startDragging);
  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('mousemove', dragRotate);
  elem.addEventListener('touchstart', startDragging);
  document.addEventListener('touchend', stopDragging);
  document.addEventListener('touchmove', dragRotate);
}

setEvtListeners();
setRotate(0);

const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');

rangeSLider.oninput = function() {
  output.innerHTML = this.value > 0 ? '+' + this.value : this.value;
}
}
