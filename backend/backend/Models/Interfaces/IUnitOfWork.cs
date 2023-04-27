namespace backend.Models.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        int Complete();
        Task<int> CompleteAsync();
    }
}
