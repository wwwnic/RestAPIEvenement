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

        public UtilisateurController(IUtilisateurRepository urepo)
        {
            _urepo = urepo;
        }


        // GET: api/<UtilisateurController>
        [HttpGet("GetAll")]
        public async Task<IEnumerable<Utilisateur>> Get()
        {
            return await _urepo.GetAllUtilisateurs();
        }

        // GET api/<UtilisateurController>/5
        [HttpGet("GetById")]
        public async Task<Utilisateur> GetUserById(int id)
        {
            return await _urepo.GetUtilisateurParId(id);
        }

        [HttpGet("GetByName")]
        public async Task<IEnumerable<Utilisateur>> GetByName(string name)
        {
            return await _urepo.GetUtilisateursParNom(name);
        }

        // POST api/<UtilisateurController>
        [HttpPost("New")]
        public async Task Post([FromBody] Utilisateur u)
        {
            u.DateCreation = DateTime.Now.Date;
            await _urepo.Create(u);
        }

        [HttpPost("Login")]
        public async Task<Utilisateur> Login([FromBody]Utilisateur u)
        {
            return await _urepo.GetUtilisateurLogin(u.NomUtilisateur, u.MotDePasse);
        }

        // Méthode qui permet de se connecter en tant qu'admin sur le client Angular.
        // On assume que l'admin est l'utilisateur avec l'id 1 dans la base de données.
        [HttpPost("LoginAdmin")]
        public async Task<string> LoginAdmin([FromBody] Utilisateur u)
        {
            var utilisateur = await _urepo.GetUtilisateurLogin(u.NomUtilisateur, u.MotDePasse);
            if (utilisateur.IdUtilisateur == 1)
            {
                return "admin";
            }
            else
            {
                return "user";
            }
        }

        // PUT api/<UtilisateurController>/5
        [HttpPut("Update")]
        public async Task UpdateUtilisateur([FromBody] Utilisateur utilisateur)
        {
            await _urepo.Update(utilisateur);
        }

        // DELETE api/<UtilisateurController>/5
        [HttpDelete("Delete/{id}/{key}")]
        public async Task Delete(int id,string key)
        {
            if (key.Equals("secret"))
            {
                await _urepo.Delete(id);
            }
        }

        [HttpPost("addParticipation")]
        public async Task AddParticipation([FromBody] Utilisateurevenement u)
        {
            await _urepo.CreateUtilisateurEvenement(u);
        }

        [HttpDelete("deleteParticipation")]
        public async Task DeleteParticipation([FromBody] Utilisateurevenement u)
        {
            await _urepo.DeleteUtilisateurEvenement(u);
        }
    }
}
