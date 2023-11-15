import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import ReservationDate from './ReservationDate.js';
import ReservationMenu from './ReservationMenu.js';
import OutputView from './OutputView.js';
import DecemberPromotion from './DecemberPromotion.js';

class Promotion {
  constructor() {}

  async execute() {
    const reservationDate = await this.getReservationDate();
    const reservationMenu = await this.getReservationMenu();
    OutputView.printMenu(reservationMenu.getMenuList());

    const decemberPromotion = new DecemberPromotion(
      reservationDate.getDate(),
      reservationMenu.getMenuList(),
    );

    OutputView.printTotalAmount(
      decemberPromotion.calculateTotalAmountBeforeDiscount(),
    );

    OutputView.printGiftList(decemberPromotion.isValidGift());
    decemberPromotion.printPromotionList();
  }

  async getReservationDate() {
    let reservationDate;
    let isValid = false;

    while (!isValid) {
      try {
        const date = await InputView.readDate();
        reservationDate = new ReservationDate(date);
        isValid = true;
      } catch ({ message }) {
        OutputView.printError(message);
      }
    }

    return reservationDate;
  }

  async getReservationMenu() {
    let reservationMenu;
    let isValid = false;

    while (!isValid) {
      try {
        const menu = await InputView.readMenu();
        reservationMenu = new ReservationMenu(menu);
        isValid = true;
      } catch ({ message }) {
        OutputView.printError(message);
      }
    }

    return reservationMenu;
  }
}

export default Promotion;
