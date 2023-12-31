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

  printGiftList(isValid) {
    Console.print('\n<증정 메뉴>');
    Console.print(`${isValid ? '샴페인 1개' : '없음'}`);
  },

  printPromotionList({
    christmas,
    weekday,
    weekend,
    special,
    gift,
    totalAmount,
  }) {
    Console.print('\n<혜택 내역>');

    if (totalAmount < 10000) {
      return Console.print('없음');
    }

    if (!christmas && !weekday && !weekend && !special && !gift) {
      return Console.print('없음');
    }

    if (christmas !== 0) {
      Console.print(
        `크리스마스 디데이 할인: -${christmas.toLocaleString('en-US')}원`,
      );
    }

    if (weekday !== 0) {
      Console.print(`평일 할인: -${weekday.toLocaleString('en-US')}원`);
    }

    if (weekend !== 0) {
      Console.print(`주말 할인: -${weekend.toLocaleString('en-US')}원`);
    }

    if (special !== 0) {
      Console.print(`특별 할인: -${special.toLocaleString('en-US')}원`);
    }

    if (gift) {
      Console.print(`증정 이벤트: -25,000원`);
    }
  },

  printDiscountAmount(discountAmount) {
    Console.print('\n<총혜택 금액>');
    if (discountAmount === 0) {
      return Console.print(`${discountAmount.toLocaleString('en-US')}원`);
    }

    Console.print(`-${discountAmount.toLocaleString('en-US')}원`);
  },

  printAfterDiscount(afterDiscountTotalAmount) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${afterDiscountTotalAmount.toLocaleString('en-US')}원`);
  },

  printEventBadge(eventBadge) {
    Console.print(`\n<12월 이벤트 배지>\n${eventBadge}`);
  },
};

export default OutputView;
