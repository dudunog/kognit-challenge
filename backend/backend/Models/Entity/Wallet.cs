namespace backend.Models.Entity
{
    public class Wallet
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public double ValorAtual { get; set; }
        public string? Banco { get; set; }
        public DateTime UltimaAtualizacao { get; set; }

        public Wallet() { }
    }
}
