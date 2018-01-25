import { Record } from 'immutable';

interface Interface {
  impersonateClientId: string;
  scope: string;
}

const initialValue = Record<Interface>({
  impersonateClientId: "",
  scope: ""
})

export class ClientImpersonationClient extends initialValue { }
