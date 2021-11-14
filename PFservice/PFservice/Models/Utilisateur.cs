using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Models
{
    public class Utilisateur
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Courriel { get; set; }
        public string Telephone { get; set; }
        [Required]
        public DateTime DateCreation { get; set; }

        public ICollection<Commentaire> Commentaires { get; set; }
        public ICollection<Evenement> Evenements { get; set; }
    }
}
