import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(menuList) {
    Console.print(
      '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n\n<주문 메뉴>',
    );

    menuList.forEach((menuItem) => {
      Console.print(`${menuItem.getMenu()} ${menuItem.getNumber()}개`);
    });
  },

  printError(message) {
    Console.print(message);
  },

  printTotalAmount(totalAmount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${totalAmount.toLocaleString('en-US')}원`);
  },
};

export default OutputView;
