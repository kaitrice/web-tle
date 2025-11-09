import { Image } from "./image.type"
import { Streaming } from "./streaming.type"
import { Track } from "./track.type"

export type Album = {
    type: string
    name: string
    cover_images: Image[]
    total_tracks: number
    tracks: Track[]
    released: Date
    links: Streaming
}
