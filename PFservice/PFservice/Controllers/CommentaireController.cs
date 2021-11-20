using Microsoft.AspNetCore.Mvc;
using PFservice.Models;
using PFservice.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PFservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentaireController : ControllerBase
    {

        //private readonly IUtilisateurRepository _urepo;
        //private readonly IEvenementRepository _erepo;
        private readonly ICommentaireRepository _crepo;

        public CommentaireController(ICommentaireRepository crepo)
        {
            _crepo = crepo;
        }

        [HttpGet("GetByEvenement/{idEvenement}")]
        public async Task<Commentaire> GetAllCommentairesParEvenement(Evenement e)
        {
            return (Commentaire) await _crepo.GetCommentairesParEvenement(e);
        }

        [HttpPost]
        public async Task CreateCommentaire([FromBody] Commentaire c)
        {
            await _crepo.Create(c);
        }

        [HttpPut("{id}")]
        public async Task UpdateCommentaire([FromBody] Commentaire c)
        {
             await _crepo.Update(c);
        }

        [HttpDelete("{id}")]

        public async Task DeleteCommentaire([FromBody] int id)
        {
            await _crepo.Delete(id);
        }

        }
    }

