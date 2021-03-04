import { DefaultAction } from '../types/Redux';
import API from '../services/api';
import { GET_CARS_BY_PEOPLE_ID } from '../types/Car';

interface Actions {
  getCarsByPeopleId(id: string): Promise<DefaultAction>;
}

const CarAction = (): Actions => {
  return {
    getCarsByPeopleId: async (id: string): Promise<DefaultAction> => {
      const { data } = await API.get(`People/${id}`);

      return {
        type: GET_CARS_BY_PEOPLE_ID,
        data,
      };
    },
  };
};

export default CarAction();
