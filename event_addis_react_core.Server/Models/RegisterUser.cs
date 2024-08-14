namespace event_addis_react_core.Server.Models
{
    public class RegisterUser
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; } = "User";
        public string PhoneNo { get; set; }
    }
}
