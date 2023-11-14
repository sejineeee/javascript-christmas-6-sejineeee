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
}

export default DecemberPromotion;
