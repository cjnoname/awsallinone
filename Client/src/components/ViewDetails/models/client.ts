import { Record, List } from 'immutable';
import { ClientResourceAccess, ClientAccessParameter, ClientImpersonationClient, AccessToken } from './';

interface Interface {
    clientId: string;
    secret?: string;
    salt?: string;
    name?: string;
    // accessToken?: AccessToken;
    clientResourceAccess?: List<ClientResourceAccess>;
    clientAccessParameter?: List<ClientAccessParameter>;
    clientImpersonationClient?: List<ClientImpersonationClient>;
}

const initialValue = Record<Interface>({
    clientId: "",
    secret: undefined,
    salt: undefined,
    name: undefined,
    // accessToken: undefined,
    clientResourceAccess: undefined,
    clientAccessParameter: undefined,
    clientImpersonationClient: undefined
})

export class Client extends initialValue {
    constructor(args: any = {}) {
        super(Object.assign({}, args as Interface, {
            client: args.client && new Client(args.client),
            clientResourceAccess: List(args.clientResourceAccess && args.clientResourceAccess.map((val: ClientResourceAccess) => new ClientResourceAccess(val))),
            clientAccessParameter: List(args.clientAccessParameter && args.clientAccessParameter.map((val: ClientAccessParameter) => new ClientAccessParameter(val))),
            clientImpersonationClient: List(args.clientImpersonationClient && args.clientImpersonationClient.map((val: ClientImpersonationClient) => new ClientImpersonationClient(val)))
        }));
    }
}
