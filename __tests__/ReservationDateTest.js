import ReservationDate from '../src/ReservationDate';

describe('방문 날짜 유효성 검사 테스트', () => {
  const ERROR_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

  test.each(['', 3.5, 0, 32])(
    '방문 날짜를 잘못 입력한 경우 예외를 발생시킨다.',
    (inputDate) => {
      expect(() => {
        new ReservationDate(inputDate);
      }).toThrowError(ERROR_MESSAGE);
    },
  );
});
