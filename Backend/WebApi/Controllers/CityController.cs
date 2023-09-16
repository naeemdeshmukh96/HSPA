using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Data;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dbContext;

        public CityController(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetCityList()
        {
            var cityList = dbContext.Cities.ToList();
            return Ok(cityList);
        }

        [HttpGet("{id}")]

        public string GetCityById(int id)
        {
            return "Makkah";
        }
    }
}
