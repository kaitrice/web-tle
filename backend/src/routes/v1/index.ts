import { fetchArtist } from "./artist";

export const routes = [
    {
        endpoint: "artist",
        handler: fetchArtist
    }
]