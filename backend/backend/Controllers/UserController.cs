using backend.Models.Entity;
using backend.Models.Interfaces;
using backend.Models.Response;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] User user)
        {
            SaveUserResponse saveUserResponse = await userService.SaveUser(user);

            if (!saveUserResponse.Success)
            {
                return UnprocessableEntity(saveUserResponse);
            }

            return Created("", saveUserResponse);
        }
    }
}
