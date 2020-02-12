import Big from 'big';

const operate = (number1, number2, operation) => {
  const num1 = Big(number1);
  const num2 = Big(number2);
  switch (operation) {
    case '+':
      return num1.add(num2);
    case '-':
      return num1.minus(num2);
    case 'X':
      return num1.mul(num2);
    case '/':
      if (num2 === 0) return "Can't divide by zero";
      return num1.div(num2);
    case '%':
      return num1.mod(num2);
    default:
      return 0;
  }
};

export default operate;
