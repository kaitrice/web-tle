async function get_access_token() {
    try {
        var client_id = process.env.SPOTIFY_CLIENT_ID;
        var client_secret = process.env.SPOTIFY_SECRET;

        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Authorization": "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                grant_type: "client_credentials"
            })
        });

        if (!response.ok) {
            throw new Error(`Invalid response`);
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_spotify_albums() {
    try {
        var id = process.env.SPOTIFY_ARTIST_ID;
        var url = `https://api.spotify.com/v1/artists/${id}/albums`;

        let data = await get_access_token();
        var token = data.access_token;

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
            throw new Error(`Invalid response`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetch_spotify_tracks({album_id}: {album_id: string}) {
    try {
        var url = `https://api.spotify.com/v1/albums/${album_id}/tracks`;

        let data = await get_access_token();
        var token = data.access_token;

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
            throw new Error(`Invalid response`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
