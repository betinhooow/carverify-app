
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;

namespace CarVerifyApp.Api.DTO
{
    [ExcludeFromCodeCoverage]
    public class PeopleDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int Age { get; set; }

        public string Address { get; set; }

        public int NmHouse { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public List<CarDTO> Car { get; set; }
    }
}
