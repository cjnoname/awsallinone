import { Record } from 'immutable';

interface Interface {
    resourceId?: string;
    key: string;
    value: string
}

const initialValue = Record<Interface>({
    resourceId: undefined,
    key: "",
    value: ""
})

export class ClientAccessParameter extends initialValue { }
