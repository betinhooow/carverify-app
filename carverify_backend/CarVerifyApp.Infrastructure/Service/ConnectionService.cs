using CarVerifyApp.Core.Gateway;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace CarVerifyApp.Infrastructure.Service
{
    public class ConnectionService: IConnection
    {
        private IConfiguration _configuration;

        IDbConnection IConnection.GetConnection(IConfiguration configuration)
        {
            _configuration = configuration;
            return new SqlConnection(GetConnection1());
        }

        private string GetConnection1()
        {
            var connection = _configuration.GetSection("ConnectionStrings").GetSection("DesafioConnection").Value;
            return connection;
        }       
    }
}
