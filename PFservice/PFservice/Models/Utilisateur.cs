using System.Text.Json.Serialization;
using System;
using System.Collections.Generic;

#nullable disable

namespace PFservice.Models
{
    public partial class Utilisateur
    {
        public Utilisateur()
        {
            Commentaires = new HashSet<Commentaire>();
            Evenements = new HashSet<Evenement>();
            Utilisateurevenements = new HashSet<Utilisateurevenement>();
        }

        public int IdUtilisateur { get; set; }
        public string NomUtilisateur { get; set; }
        public string MotDePasse { get; set; }
        public string Courriel { get; set; }
        public string Telephone { get; set; }
        public DateTime DateCreation { get; set; }

        [JsonIgnore]
        public virtual ICollection<Commentaire> Commentaires { get; set; }
        [JsonIgnore]
        public virtual ICollection<Evenement> Evenements { get; set; }
        [JsonIgnore]
        public virtual ICollection<Utilisateurevenement> Utilisateurevenements { get; set; }
    }
}
