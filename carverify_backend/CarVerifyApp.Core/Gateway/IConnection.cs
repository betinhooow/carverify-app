using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace CarVerifyApp.Core.Gateway
{
    public interface IConnection
    {
        IDbConnection GetConnection(IConfiguration configuration);
    }
}
