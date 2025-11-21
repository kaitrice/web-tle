import type { Streaming, Track } from "."

export type Album = {
    type: string
    name: string
    cover_image: string
    total_tracks: number
    tracks: Track[]
    released: Date
    links: Streaming
}
