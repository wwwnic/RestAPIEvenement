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
    public class EvenementController : ControllerBase
    {

        private readonly IUtilisateurRepository _urepo;
        private readonly IEvenementRepository _erepo;

        public EvenementController(IUtilisateurRepository urepo, IEvenementRepository erepo)
        {
            _urepo = urepo;
            _erepo = erepo;
        }

        // GET: api/<EvenementController>
        [HttpGet]
        public async Task<IEnumerable<Evenement>> Get()
        {
            return await _erepo.GetEvenementsParDateRecente();
        }

        // GET api/<EvenementController>/5
        [HttpGet("{id}")]
        public async Task<Evenement> GetEvenementParId(int id)
        {
            return await _erepo.GetEvenementParId(id);
        }

        // POST api/<EvenementController>
        [HttpPost]
        public async Task Post([FromBody] Evenement e)
        {
            //Pas certain comment recuperer le Id du creator sans session, peut etre l'envoye par cote client
            await _erepo.Create(e);
        }

        // PUT api/<EvenementController>/5
        [HttpPut("{id}")]
        public async Task Update([FromBody] Evenement e)
        {
            await _erepo.Update(e);
        }

        // DELETE api/<EvenementController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _erepo.Delete(id);
        }
    }
}
