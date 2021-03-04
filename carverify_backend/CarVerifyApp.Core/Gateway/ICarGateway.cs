using CarVerifyApp.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarVerifyApp.Core.Gateway
{
    public interface ICarGateway
    {
        Task<List<Car>> GetCarsByPeopleId(int id);

        Task<Car> GetById(int Id);

    }
}
