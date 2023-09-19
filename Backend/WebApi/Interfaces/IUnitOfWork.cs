using WebApi.Data.Interfaces;

namespace WebApi.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository cityRepository { get; }
        IUserRepository userRepository { get; }
        Task<bool> SaveAsync();
    }
}
