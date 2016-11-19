namespace AngularLab.Controllers
{
    using System.Web.Mvc;
    public class HomeController : Controller
    {

        /// <summary>
        /// The main action method. Returns a page that displays a greeting.
        /// </summary>
        /// <returns>
        /// The page with a greeting.
        /// </returns>
        public ActionResult Index()
        {

            // Generate the greeting.
            var name = "World";
            var message = GenerateGreeting(name);

            // Return the view to display the greeting.
            var model = message as object;
            return View(model);

        }

        /// <summary>
        /// Generates a greeting by calling a JavaScript function.
        /// </summary>
        /// <param name="name">
        /// The name of the person to address in the greeting.
        /// </param>
        /// <returns>
        /// The greeting.
        /// </returns>
        private string GenerateGreeting(string name)
        {

            // Variables.
            var scriptPath = HttpContext.Server.MapPath("~/scripts/main.compiled.js");
            var javaScript = System.IO.File.ReadAllText(scriptPath);
            var func = EdgeJs.Edge.Func(javaScript);

            // Create task from JavaScript.
            var task = func(name);

            // Wait for JavaScript task to complete, and return result.
            task.Wait();
            return task.Result as string;

        }

    }
}