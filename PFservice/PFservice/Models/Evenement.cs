using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Models
{
    public class Evenement
    {
        [Required]
        public int EventId { get; set; }
        [Required]
        public string Nom { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public string Description {get;set;}
        [Required]
        public int Createur { get; set; }
        public ICollection<Utilisateur> Utilisateurs{ get; set; }
        public ICollection<Commentaire> Commentaires { get; set; }
    }
}
