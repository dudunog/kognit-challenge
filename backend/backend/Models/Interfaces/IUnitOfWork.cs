namespace backend.Models.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        IWalletRepository Wallets { get; }
        int Complete();
        Task<int> CompleteAsync();
    }
}
