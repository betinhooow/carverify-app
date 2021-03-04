using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using CarVerifyApp.Core.Model;
using Dapper;
using CarVerifyApp.Core.Gateway;
using Microsoft.Extensions.Configuration;

namespace CarVerifyApp.Infrastructure.Repository
{
    public class PeopleRepository : IPeopleGateway
    {
        private readonly IConnection _connection;
        private readonly IConfiguration _configuration;
        public PeopleRepository(IConnection connection, IConfiguration configuration)
        {
            _connection = connection;
            _configuration = configuration;
        }       

        public async Task<People> GetById(int id)
        {
            using (IDbConnection dbConnection = _connection.GetConnection(_configuration))
            {
                var sql = "SELECT * FROM People WHERE Id = @Id;";
                dbConnection.Open();
                var result = await dbConnection.QueryAsync<People>(sql, new { Id = id });
                return result.FirstOrDefault();
            }
        }
    }
}
