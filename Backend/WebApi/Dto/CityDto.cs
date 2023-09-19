using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto
{
    public class CityDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Name kaahe naahi dale bhaiyyaji?")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Country kaahe naahi dale bhaiyyaji?")]
        public string Country { get; set; }
    }
}
