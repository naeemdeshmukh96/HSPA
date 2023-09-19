using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using WebApi.Data;
using WebApi.Data.Interfaces;
using WebApi.Dto;
using WebApi.Interfaces;
using WebApi.Model;

namespace WebApi.Controllers
{
    [Authorize]
    public class CityController : BaseController
    {
        private readonly DataContext dbContext;
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(DataContext dbContext,
            IUnitOfWork uow,
            IMapper mapper)
        {
            this.dbContext = dbContext;
            this.uow = uow;
            this.mapper = mapper;
        }

        [HttpGet]
        //[AllowAnonymous]
        public async Task<IActionResult> GetCityList()
        {
            var cities = await uow.cityRepository.GetCityList();
            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            return Ok(citiesDto);
        }

        [HttpPost("post")]
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            var city = mapper.Map<City>(cityDto);
            city.LastModifiedBy = "2";
            city.LastModifiedOn = DateTime.Now;

            uow.cityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDto cityDto)
        {
            var cityFromDb = await uow.cityRepository.FindCity(id);
            if (cityFromDb == null)
            {
                return BadRequest("No entity found!");
            }
            cityFromDb.LastModifiedOn = DateTime.Now;
            cityFromDb.LastModifiedBy = "";
            mapper.Map(cityDto,cityFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            uow.cityRepository.DeleteCity(id);
            await dbContext.SaveChangesAsync();
            return StatusCode(201);
        }

        ////POST -  api/city/add?cityName=Makkah
        //[HttpPost("add/{cityname}")]
        //[HttpPost("add")]
        //public async Task<IActionResult> AddCity(string cityName)
        //{
        //    City city = new City();
        //    city.Name = cityName;
        //    await dbContext.AddAsync(city);
        //    await dbContext.SaveChangesAsync();
        //    return Ok(city);
        //}

    }
}
