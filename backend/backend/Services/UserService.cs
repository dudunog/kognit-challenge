using backend.Models.Entity;
using backend.Models.Interfaces;
using backend.Models.Response;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<SaveUserResponse> SaveUser(User user)
        {
            _unitOfWork.Users.Add(user);

            int saveResponse = await _unitOfWork.CompleteAsync();

            if (saveResponse >= 0)
            {
                return new SaveUserResponse
                {
                    Success = true,
                    user = user
                };
            }

            return new SaveUserResponse
            {
                Success = false,
                Error = "Unable to save user",
                ErrorCode = "T05"
            };
        }
    }
}
