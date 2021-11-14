using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Models
{
    public class UtilisateurContext :DbContext
    {
        public UtilisateurContext(DbContextOptions<UtilisateurContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Evenement> Evenements { get; set; }
        public DbSet<Commentaire> Commentaires { get; set; }
    }
}
