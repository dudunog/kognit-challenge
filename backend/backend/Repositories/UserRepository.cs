using backend.Data;
using backend.Models.Entity;
using backend.Models.Interfaces;

namespace backend.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DataContext context) : base(context)
        {
        }
    }
}
