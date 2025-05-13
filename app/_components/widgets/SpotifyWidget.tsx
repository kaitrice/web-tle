import { getTracks } from "@/app/_data/spotify"
import { Track } from "@/app/_types/spotify.types"
import Image from "next/image"
import React from "react"

function Card(track: Track) {
	const images = track.album.images
	// console.log(images)

	return (
		<div className="flex flex-col items-center justify-start text-center">
			<div className="w-[150px] sm:w-[200px] text-center">
				{images.length > 0 && (
					<Image
						aria-hidden
						src={images[0].url}
						alt={`${track.name} cover image`}
						width={0}
						height={0}
						sizes="(min-width: 640px) 200px, 150px"
						className="w-full h-auto"
					/>
				)}
				<h1 className="text-lg sm:text-2xl font-bold mt-4 break-words">
					{track.name}
				</h1>
			</div>
		</div>
	)
}

export default async function SpotifyWidget() {
	const data = await getTracks()
	const tracks = data.tracks
	// console.log('tracks:', tracks)

	return (
		<section className="flex justify-center gap-6 p-8">
			{tracks ?
				tracks.map((track: Track) => (
					<Card key={track.id} {...track} />
				)) :
				<></>
			}
		</section>
	)
}