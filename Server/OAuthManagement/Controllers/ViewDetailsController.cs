using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OAuthManagement.Interfaces;
using OAuthManagement.Models.OAuthDb;
using OAuthManagement.Models.Requests;

namespace OAuthManagement.Controllers
{
    [Route("api/[controller]")]
    public class ViewDetailsController : Controller
    {
        private readonly IOAuthService _oAuthService;

        public ViewDetailsController(IOAuthService oAuthService)
        {
            _oAuthService = oAuthService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetDetails([FromQuery]SearchDetailsRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.ClientId) && string.IsNullOrWhiteSpace(request.Token))
            {
                return BadRequest("Request is null");
            }

            //var res = await _oAuthService.GetDetails(request);
            var res = new Client
            {
                ClientId = "Jeremy",
                Secret = "Henry",
                ClientResourceAccess = new List<ClientResourceAccess>
                {
                    new ClientResourceAccess
                    {
                        ClientId = "CJ",
                        Access = "12345",
                        ResourceId = "zzzzz"
                    }
                }
            };

            return Ok(res);
        }
    }
}
