using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var model = "Testing" as object;
            return View(model);
        }
    }
}