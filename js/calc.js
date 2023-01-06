let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['+', '-', '*', '/', '%',];
const out = document.querySelector('.calc_string');
const sum = document.querySelector('.calc_sum');
const click = document.querySelector('.buttons');

function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.clear-all').onclick = clearAll;

click.onclick = (event) => {
  if (!event.target.classList.contains('numbers_btn', 'signs_btn', 'clear-all', 'procent', 'changes-sign'))
    return;
  if (event.target.classList.contains('.clear-all'))
    return;

  const key = event.target.textContent;

  if (digit.includes(key)) {
    a += key;
    out.textContent = a;
  }
}

