import Button from "../_components/common/Button"
import Hero from "../_components/common/Hero"
import BandsintownWidget from "../_components/widgets/BandsintownWidget"
import SpotifyWidget from "../_components/widgets/SpotifyWidget"
import { YoutubeWidget } from "../_components/widgets/YoutubeWidget"

function Music() {
	return (
		<section className="p-2 md:p-6">
			<h2 className="underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Music</h2>
			{/* Spotify singles widget */}
			<SpotifyWidget />
			<Button label="Full Discography" end="/preview/music" />
		</section>
	)
}

function Tour() {
	return (
		<section className="py-10 px-6 md:px-50">
			<h2 className="underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Upcoming Shows</h2>
			{/* BandsInTown widget */}
			<BandsintownWidget max="5" />
			<Button label="View All" end="/preview/tour" />
		</section>
	)
}

function Store() {
	return (
		<section className="p-2 md:p-6">
			<h2 className="underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Store</h2>
			{/* Shoptify item widget */}
			<Button label="Shop Here" end="https://www.store.theluckyeffect.com" />
		</section>
	)
}

function Video() {
	return (
		<section className="p-2 md:p-6">
			<h2 className="underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Video</h2>
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

			<div className="flex flex-col gap-0 text-center mb-10">
				<Tour />
				<Music />
				{/* <Store /> */}
				<Video />
			</div>
		</main>
	)
}
