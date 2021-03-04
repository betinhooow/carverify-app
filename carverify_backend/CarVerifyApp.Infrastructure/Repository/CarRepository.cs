using System.Linq;
using System.Threading.Tasks;
using System.Data;
using Dapper;
using System.Collections.Generic;
using CarVerifyApp.Core.Gateway;
using Microsoft.Extensions.Configuration;
using CarVerifyApp.Core.Model;
using System.Data.SqlClient;

namespace CarVerifyApp.Infrastructure.Repository
{
    public class CarRepository : ICarGateway
    {
        private readonly IConnection _connection;
        private readonly IConfiguration _configuration;
        public CarRepository(IConnection connection, IConfiguration configuration)
        {
            _connection = connection;
            _configuration = configuration;
        }

        public async Task<Car> GetById(int id)
        {
            using (IDbConnection dbConnection = _connection.GetConnection(_configuration))
            {
                var sql = "SELECT * FROM Car WHERE Id = @Id;";
                dbConnection.Open();
                var result = await dbConnection.QueryAsync<Car>(sql, new { Id = id });
                return result.FirstOrDefault();
            }
        }
        public async Task<List<Car>> GetCarsByPeopleId(int id)
        {
            using (IDbConnection dbConnection = _connection.GetConnection(_configuration))
            {
                var sql = "SELECT * FROM Car WHERE Id_People = @Id;";
                dbConnection.Open();
                var result = await dbConnection.QueryAsync<Car>(sql, new { Id = id });

                return result.ToList();
            }
        }
    }
}
