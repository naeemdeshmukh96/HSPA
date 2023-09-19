using Microsoft.EntityFrameworkCore;
using WebApi.Data.Interfaces;
using WebApi.Model;

namespace WebApi.Data.Repository
{
    public class CityRepository : ICityRepository
    {
        private readonly DataContext dbContext;

        public CityRepository(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void AddCity(City city)
        {
            dbContext.Cities.AddAsync(city);
        }
        public void DeleteCity(int id)
        {
            var city = dbContext.Cities.Find(id);
            dbContext.Cities.Remove(city);
        }
        public async Task<City> FindCity(int id)
        {
            return await dbContext.Cities.FindAsync(id);
        }
        public async Task<IEnumerable<City>> GetCityList()
        {
            return await dbContext.Cities.ToListAsync();
        }
    }
}