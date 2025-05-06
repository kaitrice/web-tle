async function fetchVideos(code: string, qty: number, flag?: any): Promise<any> {
    const channelId = flag ? "UCfCNgMNFbmkA6hgWtewvn9w" : "UCwuPdghJfja7262miEDwcfw"

    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${code}&channelId=${channelId}&part=snippet&maxResults=${qty}`)
    
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`Preview error: ${errorData.message || res.statusText}`)
        }
    
        return await res.json()
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getVideos(qty: number): Promise<any> {
    const code = process.env.YOUTUBE_API || ""

    return fetchVideos(code, qty)
}