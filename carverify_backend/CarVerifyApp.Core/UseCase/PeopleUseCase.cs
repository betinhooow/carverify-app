using CarVerifyApp.Core.Gateway;
using CarVerifyApp.Core.Model;
using System.Threading.Tasks;

namespace CarVerifyApp.Core.UseCase
{
    public class PeopleUseCase: IPeopleUseCase
    {
        private readonly IPeopleGateway _peopleRepository;

        public PeopleUseCase(IPeopleGateway peopleRepository) {
            _peopleRepository = peopleRepository;
        }
        
        public async Task<People> GetById(int id)
        {
            return await _peopleRepository.GetById(id);
        }

    }
}
