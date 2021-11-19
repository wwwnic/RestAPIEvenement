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
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EvenementController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EvenementController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EvenementController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
