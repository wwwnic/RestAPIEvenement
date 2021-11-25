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

        public async Task<Evenement> Create(Evenement e)
        {
            e.IdEvenement = id + 1;
            _context.Evenements.Add(e);
            var ue = new Utilisateurevenement
            {
                IdEvenement = e.IdEvenement,
                IdUtilisateur = e.IdOrganisateur
            };
            _context.Utilisateurevenements.Add(ue);
            await _context.SaveChangesAsync();
            return e;
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

        public async Task<IEnumerable<Evenement>> GetEvenementsParOrganisateur(int id)
        {
            return await _context.Evenements.Where(e => e.IdOrganisateur == id).ToListAsync();
        }

        public async Task<IEnumerable<Evenement>> GetEvenementsParParticipant(int id)
        {
            return await _context.Utilisateurevenements.Where(u => u.IdUtilisateur == id).Select(ue => ue.IdEvenementNavigation).ToListAsync();
        }

        //https://stackoverflow.com/a/22123210/17406108
        public async Task<IEnumerable<Evenement>> GetEvenementsParRecherche(string nom, string mois, string location, string nomOrganisateur)
        {
            IQueryable<Evenement> query = _context.Evenements;
            if (!string.IsNullOrEmpty(nom))
            {
                query = query.Where(e => e.NomEvenement.Contains(nom));
            }
            if (!string.IsNullOrEmpty(mois))
            {
                query = query.Where(e => e.Date.Value.ToString().Substring(0,7).Equals(mois));
            }
            if (!string.IsNullOrEmpty(location))
            {
                query = query.Where(e => e.Location.Contains(location));
            }
            if (!string.IsNullOrEmpty(nomOrganisateur))
            {
                query = query.Where(e => e.IdOrganisateurNavigation.NomUtilisateur.Contains(nomOrganisateur));
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
