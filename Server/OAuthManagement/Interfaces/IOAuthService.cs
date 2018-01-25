using OAuthManagement.Models.OAuthDb;
using OAuthManagement.Models.Requests;
using System.Threading.Tasks;

namespace OAuthManagement.Interfaces
{
    public interface IOAuthService
    {
        Task<Client> GetDetails(SearchDetailsRequest request);
        Task UpdateOAuthDb(OAuthDbUpdateRequest request);
    }
}
