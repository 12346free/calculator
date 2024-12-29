const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = ''; // 清空输入框
    } else if (value === '=') {
      try {
        const expression = display.value
          .replace(/\%/g, '/100')
          .replace(/\[/g, '(')
          .replace(/\]/g, ')');
        display.value = eval(expression); // 计算结果
      } catch (e) {
        display.value = 'Error'; // 错误处理
      }
    } else if (value === '←') {
      display.value = display.value.slice(0, -1); // 删除最后一个字符
    } else {
      display.value += value; // 输入字符
    }
  });
});

// 支持键盘事件
window.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'Backspace') {
    display.value = display.value.slice(0, -1); // 退格键删除
  } else if ('0123456789/*-+.%()'.includes(key)) {
    display.value += key; // 输入数字和运算符
  } else if (key === 'Enter') {
    try {
      const expression = display.value
        .replace(/\%/g, '/100')
        .replace(/\[/g, '(')
        .replace(/\]/g, ')');
      display.value = eval(expression); // 计算结果
    } catch (e) {
      display.value = 'Error'; // 错误处理
    }
  }
});
