using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace CarVerifyApp.Api.DTO
{
    [ExcludeFromCodeCoverage]
    public class CarDTO
    {
        public int Id { get; set; }
        public string CarPlaque { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public int YearBrand { get; set; }

        public int YearModel { get; set; }

        public int Id_People { get; set; }

        public string carCaster { get; set; }
    }
}
