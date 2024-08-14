using event_addis_react_core.Server.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;


namespace event_addis_react_core.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) { 
            
        }
        public DbSet<UserCredential> UserCredentials { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Category> Categories { get; set; }
        



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UserCredential>(entity =>
            {

                entity.Property(e => e.PasswordHash)
                    .HasColumnType("nvarchar(max)")
                    .HasMaxLength(70)
                    .IsUnicode(false);
                entity.Property(e => e.CredentialId)
                    .ValueGeneratedOnAdd();
                entity.Property(e => e.PasswordSalt)
                    .HasColumnType("nvarchar(max)")
                    .IsUnicode(false);
                entity.HasOne(e => e.User).WithOne(e => e.userCrendential)
                    .HasForeignKey<UserCredential>(e => e.UserId);
            });

            modelBuilder.Entity<Event>()
           .HasOne(e => e.Location)
           .WithMany(l => l.Events)
           .HasForeignKey(e => e.LocationId);

            modelBuilder.Entity<Event>()
            .HasOne(e => e.Category)
            .WithMany(c => c.Events)
            .HasForeignKey(e => e.CategoryId);
            modelBuilder.Entity<Event>()
           .HasOne(e => e.UserInfo)
           .WithMany(c => c.Events)
           .HasForeignKey(e => e.UserId);
        }


    }
}
