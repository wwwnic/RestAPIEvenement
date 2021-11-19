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

        [HttpGet("GetAll")]
        public async Task<IEnumerable<Evenement>> GetAllEvenements() {
            return await _erepo.GetAllEvenements();
        }

        [HttpGet("GetAllEventsParOrganisateur/{id}")]
        public async Task<IEnumerable<Evenement>> GetAllEvenementsParOrganisateur(int id)
        {
            return await _erepo.GetEvenementsParOrganisateur(id);
        }

        [HttpGet("GetEvenementsParParticipants/{id}")]
        //A Implementer et elle n'est pas encore fonctionnel en ce moment
        public void GetAllEvenementsParParticipants() { }

        [HttpGet("GetAllEvenementsParRecherche")]

        public async Task<IEnumerable<Evenement>> GetAllEvenementsParRecherche(string nom, string mois, string location, string organisateur) {
            return await _erepo.GetEvenementsParRecherche(nom, mois, location, organisateur);
        }


        // GET: api/<EvenementController>
        [HttpGet("GetAllRecent")]
        public async Task<IEnumerable<Evenement>> GetAllRecentEvenements()
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
        public async Task CreateEvenement([FromBody] Evenement e)
        {
            //Pas certain comment recuperer le Id du creator sans session, peut etre l'envoye par cote client
            await _erepo.Create(e);
        }

        // PUT api/<EvenementController>/5

        // A revisiter car ce n'est pas fonctionnel
        [HttpPut("{id}")]
        public async Task UpdateEvenement([FromBody] Evenement e)
        {
            await _erepo.Update(e);
        }

        // DELETE api/<EvenementController>/5
        [HttpDelete("{id}")]
        public async Task DeleteEvenement(int id)
        {
            await _erepo.Delete(id);
        }
    }
}
