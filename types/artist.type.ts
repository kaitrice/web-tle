import { Album } from "./album.type"
import { Streaming } from "./streaming.type"

export type Artist = {
    name: string
    ids: Streaming
    links: Streaming
    genres: string[]
    discography: {
        singles: Album[]
        albums: Album[]
        appears_on: Album[]
    }
}
