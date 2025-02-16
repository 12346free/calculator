const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// 使点击输入框时弹出系统键盘
display.addEventListener('click', () => {
  display.removeAttribute('readonly'); // 使输入框可编辑
  display.focus(); // 聚焦输入框，触发系统键盘
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = ''; // 清空输入框
    } else if (value === 'CE') {
      display.value = ''; // 清空当前输入框的值（与C相同，可进一步扩展）
    } else if (value === '=') {
      try {
        const expression = display.value
          .replace(/×/g, '*') // 替换乘号
          .replace(/÷/g, '/') // 替换除号
          .replace(/\%/g, '/100') // 处理百分号
          .replace(/\[/g, '(')
          .replace(/\]/g, ')');
        display.value = eval(expression); // 计算结果
      } catch (e) {
        display.value = 'Error'; // 错误处理
      }
    } else if (value === '←') {
      display.value = display.value.slice(0, -1); // 删除最后一个字符
    } else if (button.id === 'refresh') {
      location.reload(); // 刷新网页
    } else {
      display.value += value; // 输入字符
    }
  });
});
