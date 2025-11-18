import type { Album, Streaming } from "./"

export type Artist = {
    name: string
    links: Streaming
    genres: string[]
    discography: {
        singles: Album[]
        albums: Album[]
        appears_on: Album[]
    }
}
