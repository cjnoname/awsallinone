import { Record } from 'immutable';
import { Client } from './';

export interface Interface {
    isLoading: boolean;
    client?: Client;
}

const initialValue = Record<Interface>({
    isLoading: false,
    client: undefined
})

export class ViewDetailsState extends initialValue { }
