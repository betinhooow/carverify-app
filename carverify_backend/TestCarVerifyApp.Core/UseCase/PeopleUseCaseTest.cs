using CarVerifyApp.Core.Gateway;
using CarVerifyApp.Core.Model;
using CarVerifyApp.Core.UseCase;
using Moq;
using System.Threading.Tasks;
using Xunit;

namespace TestCarVerifyApp.Core.UseCase
{
    public class PeopleUseCaseTest
    {
        private readonly IPeopleUseCase _peopleUseCase;

        private Mock<IPeopleGateway> peopleGateway;
        People people = new People() { Id = 1, Name = "José", Age = 10, Address = "Endereco Bla", NmHouse = 5, City = "Cidade Teste", Neighborhood = "Bairro Teste" };
        People emptyPeople = new People();

        public PeopleUseCaseTest()
        {
            peopleGateway = new Mock<IPeopleGateway>();
            
            peopleGateway.Setup(p => p.GetById(1)).Returns(Task.FromResult(people));
            peopleGateway.Setup(p => p.GetById(2)).Returns(Task.FromResult(emptyPeople));

            _peopleUseCase = new PeopleUseCase(peopleGateway.Object);
        }

        [Fact]
        public async void GetById_MatcheResult()
        {
            People result = await _peopleUseCase.GetById(1);

            Assert.Equal(people.Name, result.Name);
            Assert.Equal(people, result);
            
        }

        [Fact]
        public async void GetById_EmptyResult()
        {
            var result = await _peopleUseCase.GetById(2);

            Assert.Equal(emptyPeople, result);
        }
    }
}
