using CarVerifyApp.Core.Gateway;
using CarVerifyApp.Core.Model;
using CarVerifyApp.Core.UseCase;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace TestCarVerifyApp.Core.UseCase
{
    public class CarUseCaseTest
    {
        private readonly ICarUseCase _carUseCase;

        private Mock<ICarGateway> carGateway;
        Car car = new Car() { Id = 1, CarPlaque="FGT-5974", Brand="Chevrolet", Id_People=1, Model="Corsa", YearBrand=2014, YearModel=2014 };
        List<Car> lstCar = new List<Car>() { new Car() { Id = 3, CarPlaque = "FGG-5975", Brand = "Chevrolet", Id_People = 1, Model = "Corsa", YearBrand = 2014, YearModel = 2014 } };
        Car emptyCar = new Car();
        List<Car> lstEmptyCar = new List<Car>();

        public CarUseCaseTest()
        {
            carGateway = new Mock<ICarGateway>();

            carGateway.Setup(p => p.GetById(1)).Returns(Task.FromResult(car));
            carGateway.Setup(p => p.GetById(2)).Returns(Task.FromResult(emptyCar));
            carGateway.Setup(p => p.GetCarsByPeopleId(3)).Returns(Task.FromResult(lstCar));
            carGateway.Setup(p => p.GetCarsByPeopleId(4)).Returns(Task.FromResult(lstEmptyCar));

            _carUseCase = new CarUseCase(carGateway.Object);
        }

        [Fact]
        public async void GetById_MatchResult()
        {
            Car result = await _carUseCase.GetById(1);

            Assert.Equal(car.CarPlaque, result.CarPlaque);
            Assert.Equal(car, result);
        }

        [Fact]
        public async void GetById_EmptyResult()
        {
            var result = await _carUseCase.GetById(2);

            Assert.Equal(emptyCar, result);
        }

        [Fact]
        public async void GetCarsByPeopleId_MatchResult()
        {
            string message = "Este veículo não pode circular de quarta-feira";
            var result = await _carUseCase.GetCarsByPeopleId(3);

            Assert.Equal(lstCar[0].carCaster, message);
            Assert.Equal(lstCar, result);
        }

        [Fact]
        public async void GetCarsByPeopleId_EmptyResult()
        {
            var result = await _carUseCase.GetCarsByPeopleId(4);

            Assert.Equal(lstEmptyCar, result);
        }
    }
}
