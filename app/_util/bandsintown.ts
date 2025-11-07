import { Show } from "./bandsintown.type"

const artistId = "15591806"
const artistName = "The Lucky Effect"
const appId = process.env.BANDSINTOWN_API

export async function fetchUpcomingShows(): Promise<Show[] | undefined> {
    try {
        const res = await fetch(`https://rest.bandsintown.com/artists/${artistName}/events/?app_id=${appId}`, {
            method: "GET"
        })
    
        if (!res.ok) {
            const errorData = await res.json()
            throw new Error(`Preview error: ${errorData.message || res.statusText}`)
        }

        const data = await res.json()
        console.log(JSON.stringify(data, null, 2))
        return data ?? undefined
    } catch (error) {
        console.error(error)
        return undefined
    }
}

export function fetchRequestShow() {
    return `https://bandsintown.com/artist-subscribe/${artistId}?app_id=${appId}&play_my_city=true`
}