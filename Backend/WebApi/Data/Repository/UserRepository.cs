using Microsoft.EntityFrameworkCore;
using WebApi.Interfaces;
using WebApi.Model;

namespace WebApi.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dbContext;

        public UserRepository(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<User> Authenticate(string userName, string password)
        {
            return await dbContext.Users.FirstOrDefaultAsync(x =>
                x.UserName == userName && 
                x.Password == password);
        }
    }
}
