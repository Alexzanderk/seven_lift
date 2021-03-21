import { Door } from '../api/api.types';
import { Floor } from '../store/lift/lift.reducer';

export const getSectionsPanel = (arr: Door[]) => {
  const floorsWithTokenArr = arr.reduce<Array<Floor>>((acc: Array<Floor>, cur: Door) => {
    const splitedName = cur.Name.split(' '); //?
    const arrHouseAndLiftSection = splitedName[0].split('-');
    const [floors] = splitedName[1].split('/');
    const floorsArr = floors.split('.');

    floorsArr.forEach((floorNum) => {
      const floor: Floor = {
        floor: floorNum,
        open: cur.HardwareState === 512,
        section: arrHouseAndLiftSection[1],
        house: arrHouseAndLiftSection[0],
        token: cur.Token,
      };
      acc.push(floor);
    });

    return acc;
  }, []);

  const filteredFloors = floorsWithTokenArr.sort((a, b) => {
    return parseInt(a.floor) - parseInt(b.floor);
  });

  const A1 = filteredFloors.filter((item) => item.section === 'A1');
  const A2 = filteredFloors.filter((item) => item.section === 'A2');
  const A3 = filteredFloors.filter((item) => item.section === 'A');
  const B1 = filteredFloors.filter((item) => item.section === 'B1');
  const B2 = filteredFloors.filter((item) => item.section === 'B');

  return {
    A1,
    A2,
    A3,
    B1,
    B2,
  };
};

export const changeFloorStatus = (token: number) => {
  return (element: Floor) => {
    if (element.token === token) {
      element.open = !element.open;
    }

    return element;
  };
};

export const getLiftName = (section: 'A1' | 'A2' | 'A3' | 'B1' | 'B2'): string => {
  switch (section) {
    case 'A1':
      return 'Пасажирський ліфт A1';
    case 'A2':
      return 'Пасажирський ліфт A2';
    case 'A3':
      return 'Вантажний ліфт A3';
    case 'B1':
      return 'Пасажирський ліфт B1';
    case 'B2':
      return 'Вантажний ліфт B2';
  }
};
