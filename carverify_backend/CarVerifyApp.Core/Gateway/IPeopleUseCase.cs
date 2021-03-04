using CarVerifyApp.Core.Model;
using System.Threading.Tasks;

namespace CarVerifyApp.Core.Gateway
{
    public interface IPeopleUseCase
    {
        Task<People> GetById(int id);
    }
}
