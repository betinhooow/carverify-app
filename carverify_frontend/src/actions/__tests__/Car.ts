import CarAction from '../Car';

jest.mock('../../services/api', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: true })),
  };
});

describe('CarAction', () => {
  test('Executa o getCarsByPeopleId', async () => {
    const { data } = await CarAction.getCarsByPeopleId('1');

    expect(data).toBe(true);
  });
});
