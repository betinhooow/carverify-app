using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace CarVerifyApp.Infrastructure.Tests.Mocks
{
    public interface IDatabaseConnectionFactory
    {
        IDbConnection GetConnection();
    }

    public class SQLConnection: IDatabaseConnectionFactory
    {
  
        public IDbConnection GetConnection()
        {
            var connection = new SqlConnection("MockSQLConnection");
            return connection;
        }
    }
}
