import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import ReservationDate from './ReservationDate.js';
import ReservationMenu from './ReservationMenu.js';
import OutputView from './OutputView.js';

class Promotion {
  constructor() {}

  async execute() {
    const reservationDate = await this.getReservationDate();
    const reservationMenu = await this.getReservationMenu();
    await OutputView.printMenu(reservationMenu.getMenuList());
  }

  async getReservationDate() {
    try {
      const date = await InputView.readDate();
      return new ReservationDate(date);
    } catch ({ message }) {
      Console.print(message);
      await this.getReservationDate();
    }
  }

  async getReservationMenu() {
    try {
      const menu = await InputView.readMenu();
      return new ReservationMenu(menu);
    } catch ({ message }) {
      Console.print(message);
      await this.getReservationMenu();
    }
  }
}

export default Promotion;
