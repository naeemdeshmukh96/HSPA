using WebApi.Data.Interfaces;
using WebApi.Interfaces;

namespace WebApi.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dbContext;
        public UnitOfWork(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public ICityRepository cityRepository => 
            new CityRepository(dbContext);

        public IUserRepository userRepository => 
            new UserRepository(dbContext);

        public async Task<bool> SaveAsync()
        {
            return await dbContext.SaveChangesAsync() > 0;
        }
    }
}
