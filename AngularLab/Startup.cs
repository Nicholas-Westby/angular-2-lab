using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularLab.Startup))]
namespace AngularLab
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}