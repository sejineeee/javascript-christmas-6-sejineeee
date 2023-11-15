import { DESSERT_MENUS, MAIN_MENUS } from '../src/Constant';
import ReservationMenuItem from '../src/ReservationMenuItem';

describe('예외 테스트', () => {
  const ERROR_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

  test('메뉴판에 없는 메뉴를 주문한 경우 예외를 발생시킨다', () => {
    expect(() => {
      new ReservationMenuItem('엽기떡볶이', 2);
    }).toThrowError(ERROR_MESSAGE);
  });

  test.each([
    { menu: '엽기떡볶이', number: 2 },
    { menu: '해산물파스타', number: 'd' },
    { menu: '타파스', number: -2 },
  ])('주문을 잘못한 경우 예외를 발생시킨다.', ({ menu, number }) => {
    expect(() => {
      new ReservationMenuItem(menu, number);
    }).toThrowError(ERROR_MESSAGE);
  });
});

describe('기능 테스트', () => {
  test('메뉴가 얼마인지 값을 반환한다.', () => {
    const reservationMenuItem = new ReservationMenuItem('양송이수프', 3);
    const PRICE = 18000;

    expect(reservationMenuItem.calculate()).toBe(PRICE);
  });

  test.each([
    { menu: '초코케이크', number: 1, category: DESSERT_MENUS, result: 2023 },
    { menu: '티본스테이크', number: 3, category: MAIN_MENUS, result: 6069 },
  ])(
    '해당하는 메뉴를 메뉴 1개당 할인되는 금액을 반환한다.',
    ({ menu, number, category, result }) => {
      const reservationMenuItem = new ReservationMenuItem(menu, number);

      expect(reservationMenuItem.calculateDiscountMenu(category)).toBe(result);
    },
  );
});
