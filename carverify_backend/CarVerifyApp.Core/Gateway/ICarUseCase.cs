using CarVerifyApp.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarVerifyApp.Core.Gateway
{
    public interface ICarUseCase
    {
        Task<List<Car>> GetCarsByPeopleId(int peopleId);

        Task<Car> GetById(int id);
    }
}
