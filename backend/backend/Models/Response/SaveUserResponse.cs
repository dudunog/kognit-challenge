using backend.Models.Entity;

namespace backend.Models.Response
{
    public class SaveUserResponse : BaseResponse
    {
        public User user { get; set; }
    }
}
