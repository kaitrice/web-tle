import getToken from "../_lib/spotify";
import { TopTracks } from "../_types/spotify.types";

async function fetchTopTracks(code: string): Promise<TopTracks> {
    const id = process.env.SPOTIFY_ARTIST_ID

    const result = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`, {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json() ?? [];
}

export async function getTracks(): Promise<TopTracks> {
    const code = await getToken()

    return fetchTopTracks(code)
}