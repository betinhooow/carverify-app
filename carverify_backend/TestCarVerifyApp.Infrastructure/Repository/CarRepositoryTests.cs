using Xunit;
using CarVerifyApp.Infrastructure.Tests.Mocks;
using System.Collections.Generic;
using Moq;
using CarVerifyApp.Core.Model;
using CarVerifyApp.Infrastructure.Repository;
using CarVerifyApp.Core.Gateway;
using Microsoft.Extensions.Configuration;

namespace CarVerifyApp.Core.Tests.Repository
{

    public class CarRepositoryTests
    {
        private IConfiguration configuration;
        private readonly Mock<IConnection> connectionService;
        private readonly ICarGateway carGateway;

        private List<Car> cars = new List<Car>
        {
            new Car {
                Id = 1,
                Id_People = 1,
                Brand = "Brand 1",
                CarPlaque = "XXX-1234",
                Model = "Model 1",
                YearBrand = 2000,
                YearModel = 2010
            },
            new Car {
                Id = 2,
                Id_People = 1,
                Brand = "Brand 2",
                CarPlaque = "XXX-4321",
                Model = "Model 2",
                YearBrand = 2010,
                YearModel = 2000
            },
        };

        public CarRepositoryTests()
        {
            connectionService = new Mock<IConnection>();

            var db = new InMemoryDatabase();
            db.Insert(cars);
            connectionService.Setup(c => c.GetConnection(configuration)).Returns(db.OpenConnection());

            carGateway = new CarRepository(connectionService.Object, configuration);
        }

        [Fact]
        public async void GetCarsByPeopleId()
        {
            // Act
            var result = await carGateway.GetCarsByPeopleId(1);

            // Assert
            Assert.Equal(cars.Count, result.Count);
            Assert.Equal(cars[0].CarPlaque, result[0].CarPlaque);
        }
    }
}
