using CarVerifyApp.Core.Gateway;
using CarVerifyApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarVerifyApp.Core.UseCase
{
    public class CarUseCase : ICarUseCase
    {
        private readonly ICarGateway _carGateway;
        
        public CarUseCase(ICarGateway carGateway) {
            _carGateway = carGateway;            
        }
      
        public async Task<Car> GetById(int id)
        {
            return await _carGateway.GetById(id);
        }

        public async Task<List<Car>> GetCarsByPeopleId(int peopleId)
        {
            List<Car> cars = await _carGateway.GetCarsByPeopleId(peopleId);

            foreach (var car in cars)
            {
                car.carCaster = GetCarCasterStatus(car.CarPlaque);
            }

            return cars;
        }
        
        public string GetCarCasterStatus(string plaque)
        {
            int endOfPlaque = Int32.Parse(plaque.Substring(plaque.Length - 1, 1));
            
            if(endOfPlaque == 1 || endOfPlaque == 2)
            {
                return "Este veículo não pode circular de segunda-feira";
            }
            else if (endOfPlaque == 3 || endOfPlaque == 4)
            {
                return "Este veículo não pode circular de terça-feira";
            }
            else if (endOfPlaque == 5 || endOfPlaque == 6)
            {
                return "Este veículo não pode circular de quarta-feira";
            }
            else if (endOfPlaque == 7 || endOfPlaque == 8)
            {
                return "Este veículo não pode circular de quinta-feira";
            }
            else if (endOfPlaque == 9 || endOfPlaque == 0)
            {
                return "Este veículo não pode circular de sexta-feira";
            }

            return "Final de placa deve ser um número";
        }

    }
}
