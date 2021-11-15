using System;
using System.Collections.Generic;

#nullable disable

namespace PFservice.Models
{
    public partial class Utilisateurevenement
    {
        public int IdEvenement { get; set; }
        public int IdUtilisateur { get; set; }

        public virtual Evenement IdEvenementNavigation { get; set; }
        public virtual Utilisateur IdUtilisateurNavigation { get; set; }
    }
}
