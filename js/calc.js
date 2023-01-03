const btnAdd = document.querySelector('button[data-add]');
const btnSub = document.querySelector('button[data-subtraction]');
const btnMult = document.querySelector('button[data-multiplication]');
const btnDiv = document.querySelector('button[data-division]');
const btnSum = document.querySelector('button[data-sum]');
const valueImput = document.querySelector('input[data-value]');
const stringEl = document.querySelector('.js-string');
const outputEl = document.querySelector('.js-sum');

const btnInp = [
  (btnInpNull = document.querySelector('button[data-input-null]')),
  (btnInpOne = document.querySelector('button[data-input-one]')),
  (btnInpTwo = document.querySelector('button[data-input-two]')),
  (btnInpThree = document.querySelector('button[data-input-three]')),
  (btnInpFour = document.querySelector('button[data-input-four]')),
  (btnInpFive = document.querySelector('button[data-input-five]')),
  (btnInpSix = document.querySelector('button[data-input-six]')),
  (btnInpSeven = document.querySelector('button[data-input-seven]')),
  (btnInpEight = document.querySelector('button[data-input-eight]')),
  (btnInpNine = document.querySelector('button[data-input-nine]')),
];

let total = 0;

for (i = 0; i < 10; i += 1) {
  const i = btnInp.langth;
}
btnInpNull.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}0`);
});
btnInpOne.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}1`);
});
btnInpTwo.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}2`);
});
btnInpThree.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}3`);
});
btnInpFour.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}4`);
});
btnInpFive.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}5`);
});
btnInpSix.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}6`);
});
btnInpSeven.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}7`);
});
btnInpEight.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}8`);
});
btnInpNine.addEventListener('click', function () {
  stringEl.textContent = Number(`${stringEl.textContent}9`);
});
btnAdd.addEventListener('click', function () {
  const value = Number(stringEl.textContent);
  total = total + value;
  stringEl.textContent = String(`${stringEl.textContent} + ${value}`);
  outputEl.textContent = total;
  valueImput.value = '';
});
btnSub.addEventListener('click', function () {
  const value = Number(valueImput.value);
  total = total - value;
  stringEl.textContent = String(`${stringEl.textContent} - ${value}`);
  outputEl.textContent = total;
  valueImput.value = '';
});
btnMult.addEventListener('click', function () {
  const value = Number(valueImput.value);
  total = total * value;
  stringEl.textContent = String(`${stringEl.textContent} * ${value}`);
  outputEl.textContent = total;
  valueImput.value = '';
});
btnDiv.addEventListener('click', function () {
  const value = Number(valueImput.value);
  total = total / value;
  stringEl.textContent = String(`${stringEl.textContent} / ${value}`);
  outputEl.textContent = total;
  valueImput.value = '';
});
btnSum.addEventListener('click', function () {
  outputEl.textContent = total;
  stringEl.textContent = '';
});
