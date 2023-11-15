import {
  APPETIZER_MENUS,
  MAIN_MENUS,
  DESSERT_MENUS,
  BEVERAGE_MENUS,
} from './Constant.js';

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
      !Object.keys(APPETIZER_MENUS).includes(menu) &&
      !Object.keys(MAIN_MENUS).includes(menu) &&
      !Object.keys(DESSERT_MENUS).includes(menu) &&
      !Object.keys(BEVERAGE_MENUS).includes(menu)
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

  getMenu() {
    return this.#menu;
  }

  getNumber() {
    return this.#number;
  }

  calculate() {
    const menuCategories = [
      APPETIZER_MENUS,
      MAIN_MENUS,
      DESSERT_MENUS,
      BEVERAGE_MENUS,
    ];

    const priceList = menuCategories.map((menuCategory) => {
      return Object.keys(menuCategory).includes(this.#menu)
        ? menuCategory[this.#menu] * this.#number
        : 0;
    });

    return priceList.reduce((acc, currentValue) => acc + currentValue);
  }

  calculateDiscountMenu(category) {
    return Object.keys(category).includes(this.#menu) ? 2023 : 0;
  }
}

export default ReservationMenuItem;
