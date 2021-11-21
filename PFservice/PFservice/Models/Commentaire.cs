using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace PFservice.Models
{
    public partial class Commentaire
    {
        public int IdCommentaire { get; set; }
        public int IdEvenement { get; set; }
        public int IdUtilisateur { get; set; }
        public DateTime? Date { get; set; }
        public string Texte { get; set; }

        public virtual Evenement IdEvenementNavigation { get; set; }
        public virtual Utilisateur IdUtilisateurNavigation { get; set; }
    }
}
