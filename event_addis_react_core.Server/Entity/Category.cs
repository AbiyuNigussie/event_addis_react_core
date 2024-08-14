using System.ComponentModel.DataAnnotations;

namespace event_addis_react_core.Server.Entity
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
