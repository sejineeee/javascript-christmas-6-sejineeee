import {
  SPECIAL_DATE,
  CHRISTMAS_EVENT_END,
  DAY,
  MAIN_MENUS,
  DESSERT_MENUS,
} from './Constant.js';

import OutputView from './OutputView.js';

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

  calculateAfterDiscount() {
    const beforeDiscountAmount = this.calculateTotalAmountBeforeDiscount();
    const christmasDiscountAmount = this.christmasDiscount();
    const weekendDiscountAmount = this.weekendDiscount();
    const weekdayDiscountAmount = this.weekdayDiscount();
    const specialDiscountAmount = this.specialDiscount();

    if (beforeDiscountAmount < 10000) {
      return beforeDiscountAmount;
    }

    const afterDiscountTotalAmount =
      beforeDiscountAmount -
      (christmasDiscountAmount +
        weekendDiscountAmount +
        weekdayDiscountAmount +
        specialDiscountAmount);

    return afterDiscountTotalAmount;
  }

  isValidGift() {
    const totalAmountBeforeDiscount = this.calculateTotalAmountBeforeDiscount();

    if (totalAmountBeforeDiscount >= 120000) {
      return true;
    }

    return false;
  }

  printPromotionList() {
    const christmas = this.christmasDiscount();
    const weekend = this.weekendDiscount();
    const weekday = this.weekdayDiscount();
    const special = this.specialDiscount();
    const gift = this.isValidGift();
    const totalAmount = this.calculateTotalAmountBeforeDiscount();

    OutputView.printPromotionList({
      christmas,
      weekend,
      weekday,
      special,
      gift,
      totalAmount,
    });
  }

  calculateDiscountAmount() {
    const gift = this.isValidGift() ? 25000 : 0;

    if (this.calculateTotalAmountBeforeDiscount() < 10000) {
      return 0;
    }

    const discountAmount =
      this.christmasDiscount() +
      this.weekendDiscount() +
      this.weekdayDiscount() +
      this.specialDiscount() +
      gift;

    return discountAmount;
  }

  printDiscountAmount() {
    const discountAmount = this.calculateDiscountAmount();
    OutputView.printDiscountAmount(discountAmount);
  }

  getEventBadge() {
    const discountAmount = this.calculateDiscountAmount();

    if (discountAmount >= 5000 && discountAmount < 10000) {
      return '별';
    } else if (discountAmount >= 10000 && discountAmount < 20000) {
      return '트리';
    } else if (discountAmount >= 20000) {
      return '산타';
    } else {
      return '없음';
    }
  }
}

export default DecemberPromotion;
