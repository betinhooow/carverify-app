using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace CarVerifyApp.Core.Model
{
    [ExcludeFromCodeCoverage]
    public class People
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Age is required.")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Address is required.")]
        public string Address { get; set; }

        [Required(ErrorMessage = "NmHouse is required.")]
        public int NmHouse { get; set; }

        [Required(ErrorMessage = "Neighborhood is required.")]
        public string Neighborhood { get; set; }

        [Required(ErrorMessage = "City is required.")]
        public string City { get; set; }
    }
}
