using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Moja.MapAPI
{
    public class Startup{
        public void Configure(IApplicationBuilder app)
        {
            app.Map("/mvc",mvc=>{
                mvc.UseMvcWithDefaultRoute();
            });
            app.Run(c=>c.Response.WriteAsync("Hi....."));
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
    }
}