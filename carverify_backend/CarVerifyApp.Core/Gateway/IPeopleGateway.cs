using CarVerifyApp.Core.Model;
using System.Threading.Tasks;

namespace CarVerifyApp.Core.Gateway
{
    public interface IPeopleGateway
    {
        Task<People> GetById(int Id);

    }
}
