using PFservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public interface IEvenementRepository
    {
        Task<IEnumerable<Evenement>> GetAllEvenements();
        Task<Evenement> GetEvenementParId(int id);
        Task<IEnumerable<Evenement>> GetEvenementsParRecherche(string nom,string mois,string location,string organisateur);
        Task<IEnumerable<Evenement>> GetEvenementsParDateRecente();
        Task<IEnumerable<Evenement>> GetEvenementsParParticipant(int id);// Utilisateur u
        Task<IEnumerable<Evenement>> GetEvenementsParOrganisateur(int id);//Utilisateur u);
        Task Create(Evenement e);
        Task Update(Evenement e);
        Task Delete(int id);
    }
}
