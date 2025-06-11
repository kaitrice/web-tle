import { getTracks } from "@/app/_util/spotify"
import { Track } from "@/app/_types/spotify.types"
import React from "react"
import { songMap } from "@/app/_util/util"
import { CardLarge } from "../common/Card"

export default async function SpotifyWidget({ max }: { max?: number }) {
	const data = await getTracks()
	const tracks = data.tracks
	// console.log('tracks:', tracks)

	return (
		<section className="flex flex-col sm:flex-row justify-center gap-6 p-8">
			{tracks ?
				tracks.slice(0, max).map((track: Track) => {
					const link = track.name in songMap ? songMap[track.name as keyof typeof songMap] : ''
					const cover = track.album.images[0].url
					const title = track.name

					return (
						<CardLarge key={track.id} url={link} img={cover} alt={`${title} cover image`} flag >
							<h1 className="text-lg sm:text-2xl font-bold break-words">
								{track.name}
							</h1>
						</CardLarge>
					)
				}) :
				<></>
			}
		</section>
	)
}