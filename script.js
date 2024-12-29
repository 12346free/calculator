const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        const expression = display.value
          .replace(/\%/g, '/100')
          .replace(/\[/g, '(')
          .replace(/\]/g, ')');
        display.value = eval(expression);
      } catch (e) {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});
