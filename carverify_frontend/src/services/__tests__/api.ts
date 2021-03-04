import API from '../api';
import instance from '../axios';

describe('api', () => {
  let mockGet: jest.SpyInstance;

  beforeEach(() => {
    mockGet = jest.spyOn(instance, 'get');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Simula get com sucesso', async () => {
    mockGet.mockImplementation(() =>
      Promise.resolve({ data: true, status: 200 }),
    );

    const { data } = await API.get('endpoint');

    expect(data).toBe(true);
  });

  test('Simula get com erro', async () => {
    mockGet.mockImplementation(() =>
      Promise.reject({ data: false, status: 404 }),
    );

    await expect(API.get('endpoint')).rejects.toBe(false);
  });
});
