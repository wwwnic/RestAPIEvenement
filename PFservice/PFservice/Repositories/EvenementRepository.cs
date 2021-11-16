using PFservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public class EvenementRepository : IEvenementRepository
    {
        public Task<Utilisateur> CreateEvenement(Evenement e)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetAllEvenements()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetAllEvenementsByUserId()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetAllUtilisateursByNom()
        {
            throw new NotImplementedException();
        }

        public Task<Evenement> GetEvenementById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Utilisateur> GetEvenemntByNom(string nom)
        {
            throw new NotImplementedException();
        }

        public Task Update(Evenement e)
        {
            throw new NotImplementedException();
        }
    }
}
