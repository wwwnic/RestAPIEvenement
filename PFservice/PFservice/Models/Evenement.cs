using System;
using System.Collections.Generic;

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

        public virtual Utilisateur IdOrganisateurNavigation { get; set; }
        public virtual ICollection<Commentaire> Commentaires { get; set; }
        public virtual ICollection<Utilisateurevenement> Utilisateurevenements { get; set; }
    }
}
