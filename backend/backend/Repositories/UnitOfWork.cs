using backend.Data;
using backend.Models.Interfaces;

namespace backend.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _context;
        public UnitOfWork(DataContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            Wallets = new WalletRepository(_context);
        }

        public IUserRepository Users { get; private set; }

        public IWalletRepository Wallets { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
