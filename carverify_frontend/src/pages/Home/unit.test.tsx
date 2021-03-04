import React from 'react';
import {
  render as rtlRender,
  cleanup,
  fireEvent,
  act,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '.';
import store from '../../store';
import CarAction from '../../actions/Car';
import { GET_CARS_BY_PEOPLE_ID } from '../../types/Car';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const people = {
  id: 1,
  name: 'name 1',
  address: 'address 1',
  neighborhood: 'neighborhood 1',
  age: 1,
  nmHouse: 1,
  city: 'city 1',
};

const cars = [
  {
    id: 1,
    carPlaque: 'carPlaque 1',
    brand: 'brand 1',
    model: 'model 1',
    yearBrand: 1,
    yearModel: 1,
    carCaster: 'carCaster 1',
  },
  {
    id: 2,
    carPlaque: 'carPlaque 2',
    brand: 'brand 2',
    model: 'model 2',
    yearBrand: 2,
    yearModel: 2,
    carCaster: 'carCaster 2',
  },
];

describe('Page <Provider store={store}><Home />', () => {
  afterEach(() => cleanup());

  function render(ui): RenderResult {
    return rtlRender(ui, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
  }
  test('Renderiza a página', async () => {
    let container;

    await act(async () => {
      container = render(<Home />);
    });

    expect(container.getByTestId('page-home')).toBeDefined();
  });

  test('Preenche o form e envia com sucesso', async () => {
    let container;

    jest.spyOn(CarAction, 'getCarsByPeopleId').mockImplementation(() =>
      Promise.resolve({
        type: GET_CARS_BY_PEOPLE_ID,
        data: { people, cars },
      }),
    );

    await act(async () => {
      container = render(<Home />);
    });

    const input = container.getByTestId('page-home-input') as HTMLInputElement;
    const button = container.getByTestId('page-home-button');

    await act(async () => {
      fireEvent.change(input, { target: { value: '5' } });
    });
    fireEvent.click(button);

    expect(input.value).toBe('5');
  });

  test('Preenche o form e envia com erro', async () => {
    let container;

    await act(async () => {
      container = render(<Home />);
    });

    const spyOnCarAction = jest
      .spyOn(CarAction, 'getCarsByPeopleId')
      .mockImplementation(() =>
        Promise.resolve({
          type: GET_CARS_BY_PEOPLE_ID,
          data: false,
        }),
      );

    const input = container.getByTestId('page-home-input') as HTMLInputElement;
    const button = container.getByTestId('page-home-button');

    fireEvent.change(input, { target: { value: '3' } });
    await act(async () => {
      fireEvent.click(button);
    });

    expect(input.value).toBe('3');
    expect(spyOnCarAction).toHaveBeenCalled();
    expect(container.getByText('Código não encontrado =(')).toBeDefined();
  });

  test('Realiza o envio sem o código', async () => {
    let container;

    await act(async () => {
      container = render(<Home />);
    });

    const spyOnCarAction = jest
      .spyOn(CarAction, 'getCarsByPeopleId')
      .mockImplementation(() =>
        Promise.resolve({
          type: GET_CARS_BY_PEOPLE_ID,
          data: false,
        }),
      );

    const button = container.getByTestId('page-home-button');

    await act(async () => {
      fireEvent.click(button);
    });

    expect(spyOnCarAction).toHaveBeenCalled();
    expect(container.getByText('O Id é obrigatório')).toBeDefined();
  });
});
