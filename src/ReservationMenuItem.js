const APPETIZER_MENUS = ['양송이수프', '타파스', '시저샐러드'];
const MAIN_MENUS = [
  '티본스테이크',
  '바비큐립',
  '해산물파스타',
  '크리스마스파스타',
];
const DESSERT_MENUS = ['초코케이크', '아이스크림'];
const BEVERAGE_MENUS = ['제로콜라', '레드와인', '샴페인'];

class ReservationMenuItem {
  #menu;
  #number;

  constructor(menu, number) {
    this.validateMenu(menu);
    this.#menu = menu;
    this.validateNumber(Number(number));
    this.#number = Number(number);
  }

  validateMenu(menu) {
    if (
      !APPETIZER_MENUS.includes(menu) &&
      !MAIN_MENUS.includes(menu) &&
      !DESSERT_MENUS.includes(menu) &&
      !BEVERAGE_MENUS.includes(menu)
    ) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  validateNumber(number) {
    if (Number.isNaN(number) || number === 0 || !Number.isInteger(number)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    if (number < 1) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }
}

export default ReservationMenuItem;
