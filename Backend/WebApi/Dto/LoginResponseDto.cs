using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto
{
    public class LoginResponsetDto
    {
        public string? UserName { get; set; }
        [Required]
        public string? Token { get; set; }
    }
}
