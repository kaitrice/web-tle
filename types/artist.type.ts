import type { Album, Streaming } from "./index.ts"

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
