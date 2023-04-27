using backend.Models.Entity;
using backend.Models.Interfaces;
using backend.Models.Response;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : ControllerBase
    {
        private readonly IWalletService userService;
        private readonly IWalletService walletService;

        public WalletController(IWalletService userService, IWalletService walletService)
        {
            this.userService = userService;
            this.walletService = walletService;
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Wallet wallet)
        {
            SaveWalletResponse saveWalletResponse = await walletService.SaveWallet(wallet);

            if (!saveWalletResponse.Success)
            {
                return UnprocessableEntity(saveWalletResponse);
            }

            return Created("", saveWalletResponse);
        }

        [HttpGet("{id}")]
        public ActionResult GetAll(int id)
        {
            GetWalletsResponse getWalletsResponse =  walletService.GetWalletsByUser(id);

            if (!getWalletsResponse.Success)
            {
                return UnprocessableEntity(getWalletsResponse);
            }

            return Ok(getWalletsResponse);
        }
    }
}
