using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OAuthManagement.Interfaces;
using OAuthManagement.Services;

namespace OAuthManagement
{
    public partial class Startup
    {
        private static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient(typeof(Interfaces.IOAuthService), typeof(Services.OAuthService));
        }
    }
}
