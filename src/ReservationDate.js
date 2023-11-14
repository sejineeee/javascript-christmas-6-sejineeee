class ReservationDate {
  #date;

  constructor(date) {
    this.validate(Number(date));

    this.#date = Number(date);
  }

  validate(date) {
    if (Number.isNaN(date) || date === 0 || !Number.isInteger(date)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }

    if (1 > date || 31 < date) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  getDate() {
    return this.#date;
  }
}

export default ReservationDate;
