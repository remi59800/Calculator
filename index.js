const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

buttons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    result.textContent += evt.target.id;
  });
});

equal.addEventListener('click', () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener('click', () => {
  result.textContent = '';
});
