using backend.Data;
using backend.Models.Entity;
using backend.Models.Interfaces;

namespace backend.Repositories
{
    public class WalletRepository : GenericRepository<Wallet>, IWalletRepository
    {
        public WalletRepository(DataContext context) : base(context)
        {
        }
    }
}
