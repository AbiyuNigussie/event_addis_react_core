using AutoMapper;
using event_addis_react_core.Server.Data;
using event_addis_react_core.Server.Models;
using event_addis_react_core.Server.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace event_addis_react_core.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _user;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, ApplicationDbContext context, IMapper mapper)
        {
            _user = userService;
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Users

        [HttpGet]
        //[Authorize(Roles = "User")]
        [AllowAnonymous]
        public IActionResult GetUsers()
        {
            var AllUser = _user.GetUsers();
            return Ok(AllUser);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        // [AllowAnonymous]
        [Authorize(Roles = "SuperAdmin, Admin, Agent")]
        public IActionResult GetUserbyId(Guid id)
        {
            var userById = _user.GetUserbyId(id);

            if (userById == null)
            {
                return NotFound("User Doesn't Exist!");
            }

            return Ok(userById);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        [Authorize(Roles = "SuperAdmin, Admin")]
        public IActionResult PutUser(Guid id, UpdateUser user)
        {

            var dbuserid = _context.UserInfos.Find(id);
            if (id != dbuserid.UserId)
            {
                return NotFound("Error : Invalid Put Request, User Not Found !");
            }

            try
            {
                _user.PutUser(id, user);
            }


            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound("Error Updating the User !");
                }
                else
                {
                    throw;
                }
            }

            return Ok("Success !");
        }

        // POST: api/Users
        [HttpPost]
        [AllowAnonymous]
        public IActionResult PostUser([FromBody] RegisterUser user)
        {
            //var model = _mapper.Map<UserInfo>(user);
            var userExist = _user.GetUsers().Where(u => u.Email.TrimEnd().ToLower() == user.Email.Trim().ToLower() || u.Username.TrimEnd().ToLower() == user.Username.Trim().ToLower()).FirstOrDefault();


            if (userExist != null)
            {
                ModelState.AddModelError("", "Email/Username Already Exist!");
                return StatusCode(422, ModelState);
            }

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var createUser = _user.PostUser(user, user.Password);
            return Ok(createUser);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "SuperAdmin")]
        public IActionResult DeleteUser(Guid id)
        {
            var user = _user.GetUserbyId(id);
            if (user == null)
            {
                return NotFound("User Not Found");
            }

            _user.DeleteUser(user);
            return NotFound("User Deleted");
        }

        private bool UserExists(Guid id)
        {
            return _user.IsExist(id);
        }
    
    }
}
