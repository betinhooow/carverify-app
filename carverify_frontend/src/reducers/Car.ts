import { CarReducerType, GET_CARS_BY_PEOPLE_ID } from '../types/Car';
import { DefaultAction } from '../types/Redux';
import Car from '../models/Car';

const INITIAL_STATE: CarReducerType = {
  item: {
    id: 0,
    name: '',
    address: '',
    neighborhood: '',
    age: 0,
    nmHouse: 0,
    city: '',
    car: [] as Car[],
  },
};

const CarReducer = () => (
  state = INITIAL_STATE,
  action: DefaultAction,
): CarReducerType => {
  const { data } = action;

  switch (action.type) {
    case GET_CARS_BY_PEOPLE_ID:
      return {
        ...state,
        item: data,
      };

    default:
      return state;
  }
};

export default CarReducer();
