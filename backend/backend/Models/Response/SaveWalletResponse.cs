using backend.Models.Entity;

namespace backend.Models.Response
{
    public class SaveWalletResponse : BaseResponse
    {
        public Wallet wallet { get; set; }
    }
}
