
export const authEndpoint =
'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:5173/'

const clientId = 'b670599e0db04a269bec4ee564055b3a'

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read'

];

export loginUrl =   `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}& scope= ${scopes.join}`