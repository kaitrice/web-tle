export async function fetch_apple_music({ entity }: { entity: string }) {
    try {
        var id = process.env.APPLE_ARTIST_ID;
        const url = `https://itunes.apple.com/lookup?id=${id}&entity=${entity}`;

        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
