using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using CarVerifyApp.Api.DTO;
using CarVerifyApp.Core.Model;

namespace CarVerifyApp.Api.Mappers
{
    public class PeopleMapper : Profile
    {
        public static PeopleDTO MapperModelToDTO(People peopleModel, List<Car> listCarModel) {

            var configPeople = new MapperConfiguration(config => config.CreateMap<People, PeopleDTO>());
            var configCar = new MapperConfiguration(config => config.CreateMap<Car, CarDTO>());

            var mapperPeople = new Mapper(configPeople);
            var mapperCar = new Mapper(configCar);

            var peopleDTO = mapperPeople.Map<PeopleDTO>(peopleModel);
            var listCarDTO = mapperCar.Map<List<CarDTO>>(listCarModel);

            peopleDTO.Car = listCarDTO;

            return peopleDTO;           
        }
    }
}
