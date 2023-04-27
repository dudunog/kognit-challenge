using backend.Models.Entity;
using backend.Models.Response;

namespace backend.Models.Interfaces
{
    public interface IUserService
    {
        Task<SaveUserResponse> SaveUser(User user);
    }
}
