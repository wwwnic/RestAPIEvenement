using PFservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public interface ICommentaireRepository
    {
        Task<IEnumerable<Commentaire>> GetCommentairesParEvenement(int id);
        Task Create(Commentaire c);
        Task Delete(int id);
        Task Update(Commentaire c);
    }
}
