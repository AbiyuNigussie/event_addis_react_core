


using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace event_addis_react_core.Server.Entity
{
    public class UserInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid UserId { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Role { get; set; }
        public string? PhoneNo { get; set; }
        public string? Bio { get; set; }
        public string? ProfilePictureUrl { get; set; } = @".\..\uploads\profileImages\default.png";
        public DateTime RegisteredAt { get; set; }

        public DateTime LastLogin { get; set; }

        public bool? Active { get; set; }
        public DateTime? DeactivationDate { get; set; }
        public UserCredential? userCrendential { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
