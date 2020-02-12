import operate from './operate';

const calculate = (calcData, btnName) => {
  const { total, next, operation } = calcData;

  switch (btnName) {
    case '+/-':
      return {
        total: total * -1,
        next: next * -1,
      };
    case 'AC':
      return {
        total: 0,
        next: 0,
      };
    case '.':
      return {
        total: `${total}.`,
      };
    case '=':
      return operate(total, next, operation);
    default:
      return total;
  }
};

export default calculate;
