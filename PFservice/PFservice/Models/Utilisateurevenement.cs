using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace PFservice.Models
{
    public partial class Utilisateurevenement
    {
        public int IdEvenement { get; set; }
        public int IdUtilisateur { get; set; }

        [JsonIgnore]
        public virtual Evenement IdEvenementNavigation { get; set; }
        [JsonIgnore]
        public virtual Utilisateur IdUtilisateurNavigation { get; set; }
    }
}
