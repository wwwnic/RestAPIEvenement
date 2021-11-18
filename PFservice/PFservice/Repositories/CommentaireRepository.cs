using PFservice.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public class CommentaireRepository : ICommentaireRepository
    {
        private readonly ProjetEvenementsContext _context;
        private int id;

        public CommentaireRepository(ProjetEvenementsContext context)
        {
            _context = context;
            if (_context.Commentaires.Count() > 0)
            {
                id = _context.Commentaires.AsEnumerable().Last().IdCommentaire;
                _context.ChangeTracker.Clear();
            }
            else
            {
                id = 0;
            }
        }

        public async Task Create(Commentaire c)
        {
            c.IdCommentaire = id + 1;
            _context.Commentaires.Add(c);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var commentaireDel = _context.Commentaires.Find(id);
            _context.Commentaires.Remove(commentaireDel);
            await _context.SaveChangesAsync();
        }

        // Trier les commentaires par date (plus vieux au plus récent)
        public async Task<IEnumerable<Commentaire>> GetCommentairesParEvenement(Evenement e)
        {
            return await _context.Commentaires.Where(c => c.IdEvenement == e.IdEvenement)
                .OrderBy(c => c.Date.Value)
                .ToListAsync();
        }

        public async Task Update(Commentaire c)
        {
            _context.Commentaires.Update(c);
            await _context.SaveChangesAsync();
        }
    }
}
