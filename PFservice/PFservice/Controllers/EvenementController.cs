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
        private readonly IEvenementRepository _erepo;

        public EvenementController( IEvenementRepository erepo)
        {
            _erepo = erepo;
        }

        [HttpGet("GetAll")]
        public async Task<IEnumerable<Evenement>> GetAllEvenements() {
            return await _erepo.GetAllEvenements();
        }

        [HttpGet("GetParOrganisateur/{id}")]
        public async Task<IEnumerable<Evenement>> GetAllEvenementsParOrganisateur(int id)
        {
            return await _erepo.GetEvenementsParOrganisateur(id);
        }

        [HttpGet("GetParParticipant/{id}")]
        public async Task<IEnumerable<Evenement>> GetAllEvenementsParParticipant(int id) {
            return await _erepo.GetEvenementsParParticipant(id);
        }

        // Exemple url: .../api/Evenement/GetParRecherche?nom=test&mois=2021-11&location=test&organisateur=bob
        // On ajoute les queries dans l'URL dans le client
        [HttpGet("GetParRecherche")]
        public async Task<IEnumerable<Evenement>> GetAllEvenementsParRecherche(string nom, string mois, string location, string organisateur) {
            return await _erepo.GetEvenementsParRecherche(nom, mois, location, organisateur);
        }


        // GET: api/<EvenementController>
        [HttpGet("GetRecent")]
        public async Task<IEnumerable<Evenement>> GetAllRecentEvenements()
        {
            return await _erepo.GetEvenementsParDateRecente();
        }

        // GET api/<EvenementController>/5
        [HttpGet("GetById")]
        public async Task<Evenement> GetEvenementParId(int id)
        {
            return await _erepo.GetEvenementParId(id);
        }

        // POST api/<EvenementController>
        [HttpPost("New")]
        public async Task<Evenement> CreateEvenement([FromBody] Evenement e)
        {
            return await _erepo.Create(e);
        }

        // PUT api/<EvenementController>/5
        [HttpPut("Update")]
        public async Task UpdateEvenement([FromBody] Evenement e)
        {
            await _erepo.Update(e);
        }

        // DELETE api/<EvenementController>/5
        [HttpDelete("/Delete/{key}")]
        public async Task DeleteEvenement(int id,string key)
        {
            if (key.Equals("secret"))
            {
                await _erepo.Delete(id);
            }
        }
    }
}
