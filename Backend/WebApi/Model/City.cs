using System.ComponentModel.DataAnnotations;

namespace WebApi.Model
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime LastModifiedOn { get; set; }
        public string LastModifiedBy { get; set; }
    }
}
