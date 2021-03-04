using CarVerifyApp.Core.Gateway;
using CarVerifyApp.Core.UseCase;
using CarVerifyApp.Infrastructure.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using AutoMapper;
using CarVerifyApp.Infrastructure.Service;

namespace CarVerifyApp.Api
{
    public class Startup
    {
        readonly string CorsCarVerify = "CorsCarVerify";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: CorsCarVerify,
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000");
                        builder.WithOrigins("http://localhost:4200");
                    });
            });

            services.AddControllers();
            services.AddOpenApiDocument(config => config.Title = "CarVerify API");
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddAutoMapper(typeof(Startup));

            services.AddTransient<IPeopleGateway, PeopleRepository>();
            services.AddTransient<ICarGateway, CarRepository>();
           
            services.AddSingleton<IConnection, ConnectionService>();
            
            services.AddTransient<IPeopleUseCase, PeopleUseCase>();
            services.AddTransient<ICarUseCase, CarUseCase>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(CorsCarVerify);
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
