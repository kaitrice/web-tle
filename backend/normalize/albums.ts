import { Album } from "../types";
import { fetch_apple_music } from "../music/apple";
import { get_album_tracks } from "./tracks";

export async function get_albums({ data }: { data: any }) {
    const apple = await fetch_apple_music({ entity: "album" })
    const apple_items = apple.results
    
    const singles: Album[] = [];
    const album_eps: Album[] = [];
    const appears_on: Album[] = [];
    
    for (const item of data) {
        const album_tracks = await get_album_tracks({ id: item.id });

        const apple_album = apple_items.find((apple_item: {
            collectionName: string ;
            collectionViewUrl: string 
        }) =>
            apple_item.collectionName?.toLowerCase().includes(item.name.toLowerCase())
        );
        
        const album: Album = {
            type: item.album_type,
            name: item.name,
            cover_image: item.images[0].url,
            total_tracks: item.total_tracks,
            tracks: album_tracks,
            released: item.release_date,
            links: {
                spotify: item.external_urls.spotify,
                apple: apple_album.collectionViewUrl
            }
        };

        switch (album.type) {
            case "single":
                singles.push(album);
                break;
            case "album":
            case "ep":
                album_eps.push(album);
                break;
            case "appears_on":
                appears_on.push(album);
                break;
        }
    }

    return { singles, album_eps, appears_on };
}
