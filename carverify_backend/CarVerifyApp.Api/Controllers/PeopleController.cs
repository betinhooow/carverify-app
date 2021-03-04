
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarVerifyApp.Api.DTO;
using CarVerifyApp.Api.Mappers;
using CarVerifyApp.Core.Gateway;
using CarVerifyApp.Core.Model;
using Microsoft.AspNetCore.Mvc;

namespace CarVerifyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IPeopleUseCase _peopleUseCase;
        private readonly ICarUseCase _carUseCase;

        public PeopleController(IPeopleUseCase peopleUseCase, ICarUseCase carUseCase)
        {
            _peopleUseCase = peopleUseCase;
            _carUseCase = carUseCase;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            if (id == 0 ) {
                return BadRequest();
            }

            People people = await _peopleUseCase.GetById(id);
            
            if (people == null)
            {
                return NotFound();
            }

            List<Car> car = await _carUseCase.GetCarsByPeopleId(id);

            PeopleDTO peopleDTO = PeopleMapper.MapperModelToDTO(people, car);

            return Ok(peopleDTO);
        }

    }
}