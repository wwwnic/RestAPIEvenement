using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PFservice.Controllers
{
    public class EvenementController : Controller
    {
        // GET: EvenementController
        public ActionResult Index()
        {
            return View();
        }

        // GET: EvenementController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: EvenementController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: EvenementController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: EvenementController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: EvenementController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: EvenementController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: EvenementController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
