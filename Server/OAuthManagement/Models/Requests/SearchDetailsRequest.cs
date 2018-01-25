
using System.ComponentModel.DataAnnotations;

namespace OAuthManagement.Models.Requests
{
    public class SearchDetailsRequest
    {
        public string ClientId { get; set; }

        public string Token { get; set; }
    }
}
