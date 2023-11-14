import ReservationMenuItem from './ReservationMenuItem.js';

const MAX_NUMBER = 20;

class ReservationMenu {
  #menuList;

  constructor(menuList) {
    this.validate(menuList);
    this.#menuList = this.splitMenuData(menuList);
    this.validateDuplicateMenu(this.#menuList);
    this.validateMaxNumber(this.#menuList);
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

  validateDuplicateMenu(menuList) {
    const menuNameList = new Set();
    menuList.forEach((menuItem) => {
      if (menuNameList.has(menuItem.getMenu())) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }
      menuNameList.add(menuItem.getMenu());
    });
  }

  validateMaxNumber(menuList) {
    const InitialCount = 0;
    const count = menuList.reduce((acc, currentValue) => {
      return acc + currentValue.getNumber();
    }, InitialCount);

    if (count > MAX_NUMBER) {
      throw new Error(
        '[ERROR] 메뉴는 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.',
      );
    }
  }
}

export default ReservationMenu;
