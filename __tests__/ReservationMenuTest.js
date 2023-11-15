import ReservationMenu from '../src/ReservationMenu';

describe('예외테스트', () => {
  const EMPTY_STRING = '';

  const ERROR_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

  test.each([EMPTY_STRING, '양송이수프-1,양송이수프-1'])(
    '예외를 발생시킨다.',
    (input) => {
      expect(() => {
        new ReservationMenu(input);
      }).toThrowError(ERROR_MESSAGE);
    },
  );

  test('메뉴가 20개 이상이 되는 경우 예외를 발생시킨다.', () => {
    expect(() => {
      new ReservationMenu('양송이수프-1,시저샐러드-19,제로콜라-1');
    }).toThrow('[ERROR]');
  });

  test('음료만 주문한 경우 예외를 발생시킨다', () => {
    expect(() => {
      new ReservationMenu('제로콜라-1,레드와인-2');
    }).toThrow('[ERROR]');
  });
});
