import type { Artist, Album, Track } from "../types/index"
import { fetch_apple_music } from "./music/apple";
import { fetch_album_tracks, fetch_spotify_albums } from "./music/spotify";

async function get_album_tracks({ id }: { id: string }) {
    const tracks = await fetch_album_tracks({ album_id: id })
    const album_tracks: Track[] = []

    tracks.items.forEach((track: { 
        name: any; 
        external_urls: any[]; 
    }) => {
        const album_track: Track = {
            name: track.name,
            links: {
                spotify: track.external_urls[0],
                apple: ""
            }
        }

        album_tracks.push(album_track)
    });

    return album_tracks
}

async function get_album({ data }: { data: any }) {
    const singles: Album[] = [];
    const album_eps: Album[] = [];
    const appears_on: Album[] = [];
    
    for (const item of data) {
		const album_tracks = await get_album_tracks({ id: item.id });

		const album: Album = {
			type: item.album_type,
			name: item.name,
			cover_images: item.images[0].url,
			total_tracks: item.total_tracks,
			urls: {
				spotify: item.external_urls.spotify,
				apple: ""
			},
			tracks: album_tracks,
			released: item.release_date,
			links: {
				spotify: "",
				apple: ""
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

function get_genres({ data }: { data:any[] }): string[] {
    const genres: string[] = [];
    data.slice(1).forEach((item: { 
        primaryGenreName: string; 
    }) => {
        genres.push(item.primaryGenreName)
    });
    return genres
}

export async function normalize_data() {
    var spotify_data = await fetch_spotify_albums()
    var spotify = spotify_data.items

    var apple_music_data = await fetch_apple_music()
    var apple = apple_music_data.results

    var albums = await get_album({ data: spotify })

    const normalized_data: Artist = {
        name: apple[0].artistName,
        links: {
            spotify: "",
            apple: apple[0].artistLinkUrl
        },
        genres: get_genres({ data: apple }),
        discography: {
            singles: albums.singles,
            albums: albums.album_eps,
            appears_on: albums.appears_on
        }
    }
    
    console.log(JSON.stringify(normalized_data, null, 2))
    return normalized_data
}
