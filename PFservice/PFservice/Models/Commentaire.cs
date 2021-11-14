using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Models
{
    public class Commentaire
    {
        [Required]
        public int CommentId { get; set; }
        [Required]
        public Utilisateur Utilisateur{ get; set; }
        [Required]
        public Evenement Evenement { get; set; }
        [Required]
        public string Texte { get; set; }
        [Required]
        public DateTime Date { get; set; }

    }
}
