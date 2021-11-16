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
        //Methode recherche tous les utilisateurs qui ont un nom semblables. Return all users with matching strings.
        Task<IEnumerable<Utilisateur>> GetAllUtilisateursByNom(string nom);
        Task<Utilisateur> GetById(int id);
        Task<Utilisateur> Create(Utilisateur u);
        Task Update(Utilisateur u);
        Task Delete(int id);

    }
}
