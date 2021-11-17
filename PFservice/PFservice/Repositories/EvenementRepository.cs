using PFservice.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public class EvenementRepository : IEvenementRepository
    {
        private readonly ProjetEvenementsContext _context;
        private int id;

        public EvenementRepository(ProjetEvenementsContext context)
        {
            _context = context;
            if (_context.Evenements.Count() > 0)
            {
                id = _context.Evenements.AsEnumerable().Last().IdEvenement;
            }
            else
            {
                id = 0;
            }
        }

        public async Task Create(Evenement e)
        {
            e.IdEvenement = id + 1;
            _context.Evenements.Add(e);
            await _context.SaveChangesAsync();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetAllEvenements()
        {
            throw new NotImplementedException();
        }

        public Task<Evenement> GetEvenementParId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetEvenementsParDateRecente()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetEvenementsParOrganisateur(Utilisateur u)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Evenement>> GetEvenementsParParticipant(Utilisateur u)
        {
            throw new NotImplementedException();
        }

        //https://stackoverflow.com/a/22123210/17406108
        public async Task<IEnumerable<Evenement>> GetEvenementsParRecherche(string nom, string mois, string location, string organisateur)
        {
            IQueryable<Evenement> query = _context.Evenements;
            if (!string.IsNullOrEmpty(nom))
            {
                query = query.Where(e => e.NomEvenement.Contains(nom));
            }
            if (!string.IsNullOrEmpty(mois))
            {
                query = query.Where(e => e.Date.Value.ToString("YYYY-MM").Equals(mois));
            }
            if (!string.IsNullOrEmpty(location))
            {
                query = query.Where(e => e.Location.Contains(location));
            }
            if (!string.IsNullOrEmpty(organisateur))
            {
                query = query.Where(e => e.IdOrganisateurNavigation.NomUtilisateur.Contains(organisateur));
            }
            return await query.ToListAsync();
        }

        public Task Update(Evenement e)
        {
            throw new NotImplementedException();
        }
    }
}
