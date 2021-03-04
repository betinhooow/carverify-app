using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace CarVerifyApp.Core.Model
{
    [ExcludeFromCodeCoverage]
    public class Car
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Car license plaque is required.")]
        public string CarPlaque { get; set; }

        [Required(ErrorMessage = "Brand is required.")]
        public string Brand { get; set; }

        [Required(ErrorMessage = "Model is required.")]
        public string Model { get; set; }

        [Required(ErrorMessage = "YearBrand is required.")]
        public int YearBrand { get; set; }

        [Required(ErrorMessage = "YearModel is required.")]
        public int YearModel { get; set; }
        public int Id_People { get; set; }

        [ForeignKey("Id_People")]
        public virtual People People{ get; set; }

        public string carCaster { get; set; }
    }
}
