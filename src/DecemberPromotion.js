import { SPECIAL_DATE, CHRISTMAS_EVENT_END } from './Constant.js';

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

  christmasDiscount() {
    if (this.#reservationDate <= CHRISTMAS_EVENT_END) {
      let count = 1;
      let discount = 1000;

      while (count < this.#reservationDate) {
        discount += 100;
        count += 1;
      }

      return discount;
    }

    return 0;
  }
}

export default DecemberPromotion;
