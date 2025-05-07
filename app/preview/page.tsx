import Button from "../_components/common/Button"
import Hero from "../_components/common/Hero"
import BandsintownWidget from "../_components/widgets/BandsintownWidget"
import SpotifyWidget from "../_components/widgets/SpotifyWidget"
import { YoutubeWidget } from "../_components/widgets/YoutubeWidget"

function Music() {
	return (
		<section>
			<h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Music</h2>
			{/* Spotify singles widget */}
			<SpotifyWidget />
			<Button label="Full Discography" end="/preview/music" />
		</section>
	)
}

function Tour() {
	return (
		<section>
			<h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Upcoming Shows</h2>
			{/* BandsInTown widget */}
			<BandsintownWidget />
			<Button label="View All" end="/preview/tour" />
		</section>
	)
}

function Store() {
	return (
		<section>
			<h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Store</h2>
			{/* Shoptify item widget */}
			<Button label="Shop Here" end="https://www.store.theluckyeffect.com" />
		</section>
	)
}

function Video() {
	return (
		<section>
			<h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Video</h2>
			{/* Youtube widget small */}
			<YoutubeWidget />
			<Button label="Watch More" end="/preview/video" />
		</section>
	)
}

export default function Home() {
	return (
		<main>
			<Hero />

			<div className="flex flex-col gap-16 text-center p-8 bg-orange-500 text-white">
				<Music />
				<Tour />
				{/* <Store /> */}
				<Video />
			</div>
		</main>
	)
}
