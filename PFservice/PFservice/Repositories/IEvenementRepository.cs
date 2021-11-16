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
        //Methode recherche tous les utilisateurs qui ont un nom semblables. Return all users with matching strings.
        Task<IEnumerable<Evenement>> GetAllUtilisateursByNom();
        Task<IEnumerable<Evenement>> GetAllEvenementsByUserId();
        Task<Evenement> GetEvenementById(int id);
        Task<Utilisateur> GetEvenemntByNom(string nom);
        Task<Utilisateur> CreateEvenement(Evenement e);
        Task Update(Evenement e);
        Task Delete(int id);
    }
}
