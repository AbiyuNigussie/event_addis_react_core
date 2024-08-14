using AutoMapper;
using event_addis_react_core.Server.Entity;
using event_addis_react_core.Server.Models;

namespace event_addis_react_core.Server.Helper
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserInfo, UserModel>();
            CreateMap<RegisterUser, UserInfo>()
            .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => Guid.NewGuid()));
            CreateMap<RegisterUser, UserCredential>();
            CreateMap<UpdateUser, UserInfo>();
            //CreateMap<UserInfo, UserProfile>();
            //CreateMap<RegisterEvent, Event>();
            //CreateMap<RegisterEvent, Location>();
            //CreateMap<RegisterCity, City>();
            //CreateMap<CreateCategory, Category>();
        }
    }
}
