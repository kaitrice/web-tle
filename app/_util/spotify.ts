import { SpotifyToken, TopTracks } from "./spotify.types"

async function fetchToken(): Promise<SpotifyToken | null> {
    const client_id = process.env.SPOTIFY_CLIENT_ID 
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET
    
    const authString = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
    try {
        const res = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: new URLSearchParams({ grant_type: 'client_credentials' }).toString(),
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })

        if (!res.ok) {
            const errorData = await res.json()
            throw new Error(`Spotify auth failed: ${errorData.message || res.statusText}`)
        }

        const data: {
            access_token: string
            token_type: string
            expires_in: number
        } = await res.json()

        // const token = data.access_token
        // console.log('Access token:', token)

        return data
    } catch (error) {
        console.error('Error fetching token:', error)
        return null
    }
}

async function getToken(): Promise<string> {
    const token: SpotifyToken | null = await fetchToken()
    
    if (!token) throw new Error("Failed to retrieve token")

    return token.access_token
}


async function fetchTopTracks(code: string): Promise<TopTracks> {
    const artistId = "5Tr5sJICcc4lN5ppznL5fR"

    try {
        const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
            method: "GET", 
            headers: { Authorization: `Bearer ${code}` }
        })
    
        if (!res.ok) {
            const errorData = await res.json()
            throw new Error(`Preview error: ${errorData.message || res.statusText}`)
        }
    
        return await res.json() ?? []
    } catch (error) {
        console.error(error)
        return { tracks: [] }
    }
}

export async function getTracks(): Promise<TopTracks> {
    const code = await getToken()

    return fetchTopTracks(code)
}