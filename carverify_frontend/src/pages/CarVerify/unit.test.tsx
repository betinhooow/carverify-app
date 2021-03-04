import React from 'react';
import {
  render as rtlRender,
  cleanup,
  act,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import CarVerify from '.';
import store from '../../store';
import { GET_CARS_BY_PEOPLE_ID } from '../../types/Car';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    peopleId: '3',
  }),
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

const car = [
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

describe('Page <CarVerify />', () => {
  afterEach(() => cleanup());

  function render(ui): RenderResult {
    return rtlRender(ui, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
  }

  test('Renderiza a página', async () => {
    store.dispatch({ type: GET_CARS_BY_PEOPLE_ID, data: { ...people, car } });
    let container;

    await act(async () => {
      container = render(<CarVerify />);
    });

    expect(container.getByTestId('page-carverify')).toBeDefined();
  });

  test('Busca dados ao renderizar a página', async () => {
    store.dispatch({ type: GET_CARS_BY_PEOPLE_ID, data: { ...people, car } });

    const container = render(<CarVerify />);

    expect(container.getByText('Nome: name 1')).toBeDefined();
  });

  test('Clica no botao de voltar', async () => {
    let container;

    await act(async () => {
      container = render(<CarVerify />);
    });

    fireEvent.click(container.getByTestId('page-carverify-button'));
    expect(mockHistoryPush).toHaveBeenCalled();
  });

  test('Deve renderizar o component de tab', async () => {
    let container;

    await act(async () => {
      container = render(<CarVerify />);
    });

    expect(container.getByTestId('page-carverify-tab')).toBeDefined();
  });
});
