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
