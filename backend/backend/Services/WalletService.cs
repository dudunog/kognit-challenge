using backend.Models.Entity;
using backend.Models.Interfaces;
using backend.Models.Response;
using backend.Repositories;

namespace backend.Services
{
    public class WalletService : IWalletService
    {
        private readonly IUnitOfWork _unitOfWork;

        public WalletService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public GetWalletsResponse GetWalletsByUser(int userId)
        {
            IEnumerable<Wallet> wallets = _unitOfWork.Wallets.Find(wallet => wallet.UserId == userId);

            if (wallets.Count() == 0)
            {
                return new GetWalletsResponse
                {
                    Success = false,
                    Error = "No wallets found for this user",
                    ErrorCode = "T04"
                };
            }

            return new GetWalletsResponse
            {
                Success = true,
                Wallets = wallets.ToList()
            };
        }

        public async Task<SaveWalletResponse> SaveWallet(Wallet wallet)
        {
            bool userExists = _unitOfWork.Users.Exists(user => user.Id == wallet.UserId);

            if (!userExists)
            {
                return new SaveWalletResponse
                {
                    Success = false,
                    Error = $"The user of id {wallet.UserId} does not exists. Please provide a valid user id.",
                    ErrorCode = "T04"
                };
            }

            _unitOfWork.Wallets.Add(wallet);

            int saveResponse = await _unitOfWork.CompleteAsync();

            if (saveResponse >= 0)
            {
                return new SaveWalletResponse
                {
                    Success = true,
                    wallet = wallet
                };
            }

            return new SaveWalletResponse
            {
                Success = false,
                Error = "Unable to save wallet",
                ErrorCode = "T05"
            };
        }
    }
}
