import { fetchArtist } from "./artist";
import { fetchShows } from "./shows";

export const routes = [
    {
        endpoint: "artist",
        handler: fetchArtist
    },
    {
        endpoint: "shows",
        handler: fetchShows
    }
]