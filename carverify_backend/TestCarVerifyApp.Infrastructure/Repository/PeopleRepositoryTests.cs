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

    public class PeopleRepositoryTests
    {
        private IConfiguration configuration;
        private readonly Mock<IConnection> connectionService;
        private readonly IPeopleGateway peopleGateway;

        private List<People> people = new List<People>
        {
            new People {
                Id = 1,
                Name = "John Doe",
                Address = "Street 1",
                Age = 20,
                City = "City 1",
                Neighborhood = "Neigh 1",
                NmHouse = 44
            },
            new People {
                Id = 2,
                Name = "John Trê",
                Address = "Street 2",
                Age = 30,
                City = "City 2",
                Neighborhood = "Neigh 2",
                NmHouse = 33
            },
        };

        public PeopleRepositoryTests()
        {
            connectionService = new Mock<IConnection>();

            var db = new InMemoryDatabase();
            db.Insert(people);
            connectionService.Setup(c => c.GetConnection(configuration)).Returns(db.OpenConnection());

            peopleGateway = new PeopleRepository(connectionService.Object, configuration);
        }

        [Fact]
        public async void GetById()
        {
            // Act
            var result = await peopleGateway.GetById(2);

            // Assert
            Assert.Equal(people[1].Name, result.Name);
        }
    }
}
