namespace backend.Models.Entity
{
    public partial class User
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public DateTime Nascimento { get; set; }
        public string? CPF { get; set; }

        public User() { }
    }
}
