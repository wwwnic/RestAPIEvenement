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
                _context.ChangeTracker.Clear();
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

        public async Task Delete(int id)
        {
            var evenementDel = _context.Evenements.Find(id);
            _context.Evenements.Remove(evenementDel);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Evenement>> GetAllEvenements()
        {
            return await _context.Evenements.ToListAsync();
        }

        public async Task<Evenement> GetEvenementParId(int id)
        {
            return await _context.Evenements.FindAsync(id);
        }

        public async Task<IEnumerable<Evenement>> GetEvenementsParDateRecente()
        {
            return await _context.Evenements.OrderByDescending(e => e.Date.Value).ToListAsync();
        }

        public async Task<IEnumerable<Evenement>> GetEvenementsParOrganisateur(Utilisateur u)
        {
            return await _context.Evenements.Where(e => e.IdOrganisateur == u.IdUtilisateur).ToListAsync();
        }

        public async Task<IEnumerable<Evenement>> GetEvenementsParParticipant(Utilisateur u)
        {
            return await _context.Utilisateurevenements.Where(u => u.IdUtilisateur == u.IdUtilisateur).Select(ue => ue.IdEvenementNavigation).ToListAsync();
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

        public async Task Update(Evenement e)
        {
            _context.Evenements.Update(e);
            await _context.SaveChangesAsync();
        }
    }
}
