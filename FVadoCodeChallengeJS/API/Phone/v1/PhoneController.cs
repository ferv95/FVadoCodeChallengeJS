﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CodeChallengeFVado.API.Phone.v1.mockData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace CodeChallengeFVado.API
{
    [Produces("application/json")]
    [Route("api/Phones")]
    public class PhoneController : Controller
    {
        public IEnumerable<PhoneModel> GetPhones()
        {
            Thread.Sleep(1250);
            return PhoneMockData.GetMockPhones();
        }

    }
}