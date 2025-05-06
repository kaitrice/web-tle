import getToken from "../_lib/spotify"
import { TopTracks } from "../_types/spotify.types"

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