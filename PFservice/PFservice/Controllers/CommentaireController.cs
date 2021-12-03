using Microsoft.AspNetCore.Mvc;
using PFservice.Attributes;
using PFservice.Models;
using PFservice.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PFservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiKey]
    public class CommentaireController : ControllerBase
    {

        //private readonly IUtilisateurRepository _urepo;
        //private readonly IEvenementRepository _erepo;
        private readonly ICommentaireRepository _crepo;

        public CommentaireController(ICommentaireRepository crepo)
        {
            _crepo = crepo;
        }

        [HttpGet("GetByEvenement")]
        public async Task<IEnumerable<Commentaire>> GetAllCommentairesParEvenement(int id)
        {
            return await _crepo.GetCommentairesParEvenement(id);
        }

        [HttpPost("New")]
        public async Task CreateCommentaire([FromBody] Commentaire c)
        {
            await _crepo.Create(c);
        }

        [HttpPut("Update")]
        public async Task UpdateCommentaire([FromBody] Commentaire c)
        {
            await _crepo.Update(c);
        }

        [HttpDelete("Delete/{key}")]

        public async Task DeleteCommentaire(int id,string key)
        {
            if (key.Equals("secret"))
            {
                await _crepo.Delete(id);
            }
        }
    }
}

