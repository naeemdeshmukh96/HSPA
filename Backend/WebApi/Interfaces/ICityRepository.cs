using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Data.Interfaces
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetCityList();
        void AddCity(City city);
        void DeleteCity(int id);
        Task<City> FindCity(int id);
    }
}
