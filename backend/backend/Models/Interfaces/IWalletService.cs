using backend.Models.Entity;
using backend.Models.Response;

namespace backend.Models.Interfaces
{
    public interface IWalletService
    {
        Task<SaveWalletResponse> SaveWallet(Wallet user);
        GetWalletsResponse GetWalletsByUser(int userId);
    }
}
