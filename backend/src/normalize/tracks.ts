import { Streaming, Track } from "../types";
import { fetch_spotify_tracks, fetch_apple_music } from "../music";

export async function get_album_tracks({ id }: { id: string }) {
    const spotify_tracks = await fetch_spotify_tracks({ album_id: id })
    const apple = await fetch_apple_music({ entity: "song" })
    const apple_tracks = apple.results

    const album_tracks: Track[] = []
    
    spotify_tracks.items.forEach((track: { 
        name: string; 
        external_urls: Streaming; 
    }) => {
        const apple_track = apple_tracks.find((item: { collectionName: string }) =>
            item.collectionName?.toLowerCase().includes(track.name.toLowerCase())
        );

        const album_track: Track = {
            name: track.name,
            links: {
                spotify: track.external_urls.spotify,
                apple: apple_track.trackViewUrl
            }
        }

        album_tracks.push(album_track)
    });

    return album_tracks
}