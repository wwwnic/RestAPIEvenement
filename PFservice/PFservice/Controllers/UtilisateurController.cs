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
    public class UtilisateurController : ControllerBase
    {

        private readonly IUtilisateurRepository _urepo;
        private readonly IEvenementRepository _erepo;

        public UtilisateurController(IUtilisateurRepository urepo,IEvenementRepository erepo)
        {
            _urepo = urepo;
            _erepo = erepo;
        }


        // GET: api/<UtilisateurController>
        [HttpGet]
        public async Task<IEnumerable<Utilisateur>> Get()
        {
            return await _urepo.GetAllUtilisateurs();
        }

        // GET api/<UtilisateurController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UtilisateurController>
        [HttpPost("New")]
        public async Task Post([FromBody] Utilisateur u)
        {
            u.DateCreation = DateTime.Now.Date;
            await _urepo.Create(u);
        }

        // PUT api/<UtilisateurController>/5
        [HttpPut("Update")]
        public async Task UpdateUtilisateur([FromBody] Utilisateur utilisateur)
        {
            await _urepo.Update(utilisateur);
        }

        // DELETE api/<UtilisateurController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _urepo.Delete(id);
        }
    }
}
