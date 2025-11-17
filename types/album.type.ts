import type { Streaming, Track } from "./index.ts"

export type Album = {
    type: string
    name: string
    cover_images: string
    total_tracks: number
    tracks: Track[]
    released: Date
    links: Streaming
}
