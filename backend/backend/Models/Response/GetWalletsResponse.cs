using backend.Models.Entity;

namespace backend.Models.Response
{
    public class GetWalletsResponse : BaseResponse
    {
        public List<Wallet> Wallets { get; set; }
    }
}
