import { Image, Streaming } from "./common.type"

type Artist = {
	external_urls: Streaming
	external_ids: Streaming
	name: string
}

export type Track = {
	album_type: string
	total_tracks: number
	available_markets: string[]
	external_urls: Streaming
	href: string
	id: string
	images: Image[]
	name: string
	release_date: string
	type: string
	uri: string
	artists: Artist[]
	album_group: string
}
