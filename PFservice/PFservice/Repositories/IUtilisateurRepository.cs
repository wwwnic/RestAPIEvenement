using PFservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public interface IUtilisateurRepository
    {
        Task<IEnumerable<Utilisateur>> GetAllUtilisateurs();
        Task<IEnumerable<Utilisateur>> GetUtilisateursParNom(string nom);
        Task<Utilisateur> GetUtilisateurParId(int id);
        Task<Utilisateur> GetUtilisateurLogin(string nom, string motdepasse);
        Task Create(Utilisateur u);
        Task Update(Utilisateur u);
        Task Delete(int id);
        Task CreateUtilisateurEvenement(Utilisateurevenement u);
        Task DeleteUtilisateurEvenement(Utilisateurevenement u);
        Task<Utilisateur> GetUtilisateurDansEvenement(Utilisateurevenement u);
    }
}
