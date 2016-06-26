using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Moja.MapAPI;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host=new WebHostBuilder()
            .UseKestrel()
            .UseUrls("http://localhost:3000")
            .UseStartup<Startup>()
            .Build();
            host.Run();
        }
    }
}
