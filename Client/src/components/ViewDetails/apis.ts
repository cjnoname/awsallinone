import server from '../../utils/server';

export const getOAuth = (data: any) => server.get("ViewDetails/GetDetails", data);
