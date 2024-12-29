const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const backspaceButton = document.getElementById('backspace');

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
    } else if (value === '←') {
      display.value = display.value.slice(0, -1); // 删除最后一个字符
    } else {
      display.value += value;
    }
  });
});

// 监听键盘事件
window.addEventListener('keydown', (event) => {
  const key = event.key;

  // 处理退格键
  if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }

  // 处理数字和运算符
  if ('0123456789/*-+.%()'.includes(key)) {
    display.value += key;
  }

  // 处理回车键
  if (key === 'Enter') {
    try {
      const expression = display.value
        .replace(/\%/g, '/100')
        .replace(/\[/g, '(')
        .replace(/\]/g, ')');
      display.value = eval(expression);
    } catch (e) {
      display.value = 'Error';
    }
  }
});
