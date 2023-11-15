import {
  SPECIAL_DATE,
  CHRISTMAS_EVENT_END,
  DAY,
  MAIN_MENUS,
  DESSERT_MENUS,
} from './Constant.js';

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

  parsedDay(date) {
    const dayIndex = new Date(2023, 11, date + 1).getDay();
    const day = DAY[dayIndex];

    return day;
  }

  weekendDiscount() {
    const WEEKEND = ['금요일', '토요일'];
    const day = this.parsedDay(this.#reservationDate);

    if (WEEKEND.includes(day)) {
      const discountList = this.#reservationMenu.map((menuItem) =>
        menuItem.calculateDiscountMenu(MAIN_MENUS),
      );

      return discountList.reduce((acc, currentValue) => acc + currentValue);
    }

    return 0;
  }

  weekdayDiscount() {
    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일'];
    const day = this.parsedDay(this.#reservationDate);

    if (WEEKDAY.includes(day)) {
      const discountList = this.#reservationMenu.map((menuItem) =>
        menuItem.calculateDiscountMenu(DESSERT_MENUS),
      );

      return discountList.reduce((acc, currentValue) => acc + currentValue);
    }

    return 0;
  }

  calculateDiscount() {
    const beforeDiscountAmount = this.calculateTotalAmountBeforeDiscount();
    const christmasDiscountAmount = this.christmasDiscount();
    const weekendDiscountAmount = this.weekendDiscount();
    const weekdayDiscountAmount = this.weekdayDiscount();
    const specialDiscountAmount = this.specialDiscount();

    const discountTotalAmount =
      beforeDiscountAmount +
      christmasDiscountAmount +
      weekendDiscountAmount +
      weekdayDiscountAmount +
      specialDiscountAmount;

    return discountTotalAmount;
  }
}

export default DecemberPromotion;
