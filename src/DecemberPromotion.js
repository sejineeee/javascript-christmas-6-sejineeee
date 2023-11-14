import { SPECIAL_DATE } from './Constant.js';

class DecemberPromotion {
  #reservationDate;
  #reservationMenu;

  constructor(date, menu) {
    this.#reservationDate = date;
    this.#reservationMenu = menu;
  }

  calculateTotalAmountBeforeDiscount() {
    const totalList = this.#reservationMenu.map((menuItem) =>
      menuItem.calculate(),
    );

    const totalAmount = totalList.reduce(
      (acc, currentValue) => acc + currentValue,
      0,
    );

    return totalAmount;
  }

  specialDiscount() {
    if (SPECIAL_DATE.includes(this.#reservationDate)) {
      return 1000;
    }

    return 0;
  }
}

export default DecemberPromotion;
