using System;
using System.Text.Json.Serialization;

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

        [JsonIgnore]
        public virtual Evenement IdEvenementNavigation { get; set; }
        [JsonIgnore]
        public virtual Utilisateur IdUtilisateurNavigation { get; set; }
    }
}
