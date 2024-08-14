using AutoMapper;
using event_addis_react_core.Server.Data;
using event_addis_react_core.Server.Entity;
using event_addis_react_core.Server.Models;
using event_addis_react_core.Server.Repositories;

namespace event_addis_react_core.Server.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UserService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<UserInfo> GetUsers() => _context.UserInfos.ToList();

        public UserInfo GetUserbyId(Guid id) => _context.UserInfos.Find(id);


        public UserInfo PostUser(RegisterUser createUser, string Password)
        {

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(Password, out passwordHash, out passwordSalt);

            var user = _mapper.Map<UserInfo>(createUser);
            user.RegisteredAt = DateTime.UtcNow;

            var credential = _mapper.Map<UserCredential>(createUser);
            credential.PasswordHash = passwordHash;
            credential.PasswordSalt = passwordSalt;
            credential.UserId = user.UserId;

            _context.UserInfos.Add(user);
            _context.UserCredentials.Add(credential);
            _context.SaveChanges();
            return user;
        }

        public void DeleteUser(UserInfo user)
        {
            var userCred = _context.UserCredentials.FirstOrDefault(cred => cred.UserId == user.UserId);
            _context.UserInfos.Remove(user);
            _context.UserCredentials.Remove(userCred);
            _context.SaveChanges();

        }

        void IUserService.PutUser(Guid id, UpdateUser user)
        {
            var updateobj = _context.UserInfos.Find(id);
            updateobj.Username = user.Username;
            updateobj.Email = user.Email;
            updateobj.PhoneNo = user.PhoneNo;
            updateobj.Bio = user.Bio;
            updateobj.ProfilePictureUrl = user.ProfilePictureUrl;

            _context.SaveChanges();
        }
        public bool IsExist(Guid id)
        {
            return _context.UserInfos.Any(e => e.UserId == id);
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }


    }
}
