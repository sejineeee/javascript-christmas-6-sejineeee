import ReservationMenuItem from './ReservationMenuItem.js';

class ReservationMenu {
  #menuList;

  constructor(menuList) {
    this.#menuList = this.splitMenuData(menuList);
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
