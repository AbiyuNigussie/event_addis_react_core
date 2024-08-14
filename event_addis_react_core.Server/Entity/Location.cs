using System.ComponentModel.DataAnnotations;

namespace event_addis_react_core.Server.Entity
{
    public class Location
    {
        [Key]
        public int LocationId { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
        public string? StreetName { get; set; }
        public string? PostalCode { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
