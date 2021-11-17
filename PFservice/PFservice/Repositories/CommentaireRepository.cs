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

        public Task Delete(Commentaire c)
        {
            throw new NotImplementedException();
        }

        // Trier les commentaires par date (plus vieux au plus récent)
        public Task<IEnumerable<Commentaire>> GetCommentairesParEvenement()
        {
            throw new NotImplementedException();
        }

        public Task Update(Commentaire c)
        {
            throw new NotImplementedException();
        }
    }
}
