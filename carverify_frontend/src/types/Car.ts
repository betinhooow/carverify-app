import Car from '../models/Car';
import People from '../models/People';

export const GET_CARS_BY_PEOPLE_ID = 'GET_CARS_BY_PEOPLE_ID';

interface Item extends People {
  car: Car[];
}
export interface CarReducerType {
  item: Item;
}
