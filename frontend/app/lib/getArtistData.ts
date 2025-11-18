import { Artist } from "../types"

export async function getArtistData(): Promise<Artist> {
    const URL = process.env.API_URL ? process.env.API_URL : ""
    const KEY = process.env.BUILD_API_KEY ? process.env.BUILD_API_KEY : ""

    const res = await fetch(URL, {
        method: "GET",
        headers: {
            'x-api-key': KEY
        }
    })

    if (!res.ok) throw new Error(`API error ${res.status}`);

    const data = await res.json();

    return data as Artist
}