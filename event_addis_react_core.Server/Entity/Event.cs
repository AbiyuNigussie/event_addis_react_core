using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace event_addis_react_core.Server.Entity
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        public string Title { get; set; }
        public DateTime Schedule { get; set; }
        public string Description { get; set; }
        public string Organizer { get; set; }
        public string? Image { get; set; }
        public string Contact { get; set; }
        public int LocationId { get; set; }
        public int CategoryId { get; set; }
        public Guid UserId { get; set; }

        [NotMapped]
        public Location Location { get; set; }
        public Category Category { get; set; }
        public UserInfo UserInfo { get; set; }


    }
}
