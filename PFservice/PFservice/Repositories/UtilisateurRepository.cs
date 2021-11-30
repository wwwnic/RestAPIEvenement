using PFservice.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public class UtilisateurRepository : IUtilisateurRepository
    {
        private readonly ProjetEvenementsContext _context;
        private int id;

        public UtilisateurRepository(ProjetEvenementsContext context) 
        {
            _context = context;
            
            if (context.Utilisateurs.Count() > 0)
            {
                id = _context.Utilisateurs.AsEnumerable().Last().IdUtilisateur;
                _context.ChangeTracker.Clear();
            } 
            else
            {
                id = 0;
            }
        }

        public async Task Create(Utilisateur u)
        {
            u.IdUtilisateur = id + 1;
            _context.Utilisateurs.Add(u);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var utilisateurDel = _context.Utilisateurs.Find(id);
            _context.Utilisateurs.Remove(utilisateurDel);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Utilisateur>> GetAllUtilisateurs()
        {
            return await _context.Utilisateurs.ToListAsync();
        }

        public async Task<IEnumerable<Utilisateur>> GetUtilisateursParNom(string nom)
        {
            return await _context.Utilisateurs
                .Where(u => u.NomUtilisateur.Contains(nom))
                .ToListAsync();
        }

        public async Task<Utilisateur> GetUtilisateurLogin(string nom,string motdepasse)
        {
            IQueryable<Utilisateur> query = _context.Utilisateurs.Where(u => u.NomUtilisateur.Equals(nom) &&
            u.MotDePasse.Equals(motdepasse));
            if (query.Any())
            {
                return await query.FirstOrDefaultAsync();
            } else
            {
                Utilisateur nullUtilisateur = new Utilisateur
                {
                    IdUtilisateur = 0
                };
                return nullUtilisateur;
            }
        }

        public async Task<Utilisateur> GetUtilisateurParId(int id)
        {
            return await _context.Utilisateurs.FindAsync(id);
        }

        public async Task Update(Utilisateur u)
        {
            _context.Update(u);
            await _context.SaveChangesAsync();
        }

        public async Task CreateUtilisateurEvenement(Utilisateurevenement u)
        {
            _context.Utilisateurevenements.Add(u);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUtilisateurEvenement(Utilisateurevenement u)
        {
            _context.Utilisateurevenements.Remove(u);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Utilisateur>> GetUtilisateursDansEvenement(int idEvenement)
        {
            return await _context.Utilisateurs.Where(u => u.Utilisateurevenements.Any(ue => ue.IdEvenement == idEvenement)).ToListAsync();
        }
    }
}
