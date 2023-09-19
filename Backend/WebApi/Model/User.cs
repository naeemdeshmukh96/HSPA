using System.ComponentModel.DataAnnotations;

namespace WebApi.Model
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
