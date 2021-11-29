using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace PFservice.Models
{
    public partial class Evenement
    {
        public Evenement()
        {
            Commentaires = new HashSet<Commentaire>();
            Utilisateurevenements = new HashSet<Utilisateurevenement>();
        }

        public int IdEvenement { get; set; }
        public string NomEvenement { get; set; }
        public string Location { get; set; }
        public DateTime? Date { get; set; }
        public int IdOrganisateur { get; set; }
        public string Description { get; set; }

        [JsonIgnore]
        public virtual Utilisateur IdOrganisateurNavigation { get; set; }
        [JsonIgnore]
        public virtual ICollection<Commentaire> Commentaires { get; set; }
        [JsonIgnore]
        public virtual ICollection<Utilisateurevenement> Utilisateurevenements { get; set; }
    }
}
