import type { Artist } from "../../types/index"
import { fetch_apple_music } from "../music/apple";
import { fetch_spotify_albums } from "../music/spotify";
import { get_albums } from "./albums";
import { get_genres } from "./genres";

export async function normalize_data() {
    var spotify_data = await fetch_spotify_albums()
    var spotify = spotify_data.items

    var apple_music_data = await fetch_apple_music({ entity: "album" })
    var apple = apple_music_data.results

    var albums = await get_albums({ data: spotify })

    const normalized_data: Artist = {
        name: apple[0].artistName,
        links: {
            spotify: spotify[0].artists[0].external_urls.spotify,
            apple: apple[0].artistLinkUrl
        },
        genres: get_genres({ data: apple }),
        discography: {
            singles: albums.singles,
            albums: albums.album_eps,
            appears_on: albums.appears_on
        }
    }
    
    return normalized_data
}
