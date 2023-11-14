import ReservationMenuItem from './ReservationMenuItem.js';

class ReservationMenu {
  #menuList;

  constructor(menuList) {
    this.validate(menuList);
    this.#menuList = this.splitMenuData(menuList);
  }

  validate(menuList) {
    if (menuList === '') {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  splitMenuData(menuList) {
    const splitMenuData = menuList.split(',').map((menuItem) => {
      const [menu, number] = menuItem.split('-');

      return new ReservationMenuItem(menu, number);
    });

    return splitMenuData;
  }
}

export default ReservationMenu;
