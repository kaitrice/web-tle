import { Videos } from "../_types/youtube.type"

async function fetchVideos(code: string, qty: number, channelId: string): Promise<Videos> {
    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${code}&channelId=${channelId}&part=snippet&maxResults=${qty}`)
    
        if (!res.ok) {
            const errorData = await res.json()
            throw new Error(`Preview error: ${errorData.message || res.statusText}`)
        }
    
        return await res.json() ?? []
    } catch (error) {
        console.error(error)
        return { items: [] }
    }
}

export async function getVideos(qty: number, flag: boolean): Promise<Videos> {
    const code = process.env.YOUTUBE_API || ""
    const channelId = flag ? "UCfCNgMNFbmkA6hgWtewvn9w" : "UCwuPdghJfja7262miEDwcfw"

    return fetchVideos(code, qty, channelId)
}