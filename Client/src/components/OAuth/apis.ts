import server from '../../utils/server'

export const saveOAuth = (data: any) => server.post("oauth/save", data);
