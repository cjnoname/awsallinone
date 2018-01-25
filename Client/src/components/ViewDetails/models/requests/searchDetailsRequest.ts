import { Record } from 'immutable';

interface Interface {
    clientId?: string;
    token?: string;
}

const initialValue = Record<Interface>({
    clientId: undefined,
    token: undefined
})

export class SearchDetailsRequest extends initialValue { }
