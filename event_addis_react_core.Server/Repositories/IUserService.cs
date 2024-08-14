using event_addis_react_core.Server.Entity;
using event_addis_react_core.Server.Models;

namespace event_addis_react_core.Server.Repositories
{
    public interface IUserService
    {
        IEnumerable<UserInfo> GetUsers();
        UserInfo GetUserbyId(Guid id);
        void PutUser(Guid id, UpdateUser user);
        UserInfo PostUser(RegisterUser create, string Password);
        void DeleteUser(UserInfo user);
        public bool IsExist(Guid id);
    }
}
