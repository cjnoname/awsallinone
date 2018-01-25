import { Record } from 'immutable';

interface Interface {
    resourceId: string;
    access: string;
}

const initialValue = Record<Interface>({
    resourceId: "",
    access: ""
})

export class ClientResourceAccess extends initialValue { }
