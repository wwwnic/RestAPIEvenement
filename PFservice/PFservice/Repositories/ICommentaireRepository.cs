using PFservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Repositories
{
    public interface ICommentaireRepository
    {
        Task<IEnumerable<Commentaire>> GetCommentairesParEvenement();
        Task Create(Commentaire c);
        Task Delete(Commentaire c);
        Task Update(Commentaire c);
    }
}
