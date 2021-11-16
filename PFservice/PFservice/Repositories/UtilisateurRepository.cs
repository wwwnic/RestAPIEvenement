using PFservice.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public class UtilisateurRepository : IUtilisateurRepository
    {
        private readonly ProjetEvenementsContext _context;

        public UtilisateurRepository(ProjetEvenementsContext context) {
            _context = context;
        }
        public async Task<Utilisateur> Create(Utilisateur u)
        {
            _context.Utilisateurs.Add(u);
            await _context.SaveChangesAsync();
            return u;
            //throw new NotImplementedException();
        }

        public async Task Delete(int id)
        {
            var utilisateurDel = await _context.Utilisateurs.FindAsync(id);
            _context.Utilisateurs.Remove(utilisateurDel);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Utilisateur>> GetAllUtilisateurs()
        {
            return await _context.Utilisateurs.ToListAsync();
        }

        public async Task<IEnumerable<Utilisateur>> GetAllUtilisateursByNom(string nom)
        {
            List<Utilisateur> utilisateurs = _context.Utilisateurs.ToList();
            List<Utilisateur> utilisateurFiltre = new  List<Utilisateur>();
            foreach(Utilisateur u in utilisateurs)
            {
                if (u.NomUtilisateur.StartsWith(nom)) 
                {
                    utilisateurFiltre.Add(u);
                }
            }

            return utilisateurFiltre;

        }

        public async Task<Utilisateur> GetById(int id)
        {
            return await _context.Utilisateurs.FindAsync(id);
        }

        public async Task Update(Utilisateur u)
        {
            //_context.Entry(Utilisateur).State = EntityState.Modified;
            //await _context.Utilisateurs.SaveChangesAsync();

        }
    }
}
