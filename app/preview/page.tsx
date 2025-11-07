import Button from "../_components/common/Button"
import { Card } from "../_components/common/Card"
import { HeroVideo } from "../_components/common/Hero"
import Testimonials from "../_components/common/Testimonials"
import { TourWidget } from "../_components/widgets/BandsintownWidget"
import SpotifyWidget from "../_components/widgets/SpotifyWidget"
import { YoutubeWidget } from "../_components/widgets/YoutubeWidget"

function News() {
	return (
		<section className="p-2 md:p-6">
			<h1 className="underline underline-offset-6 uppercase tracking-widest text-xl font-bold">Press</h1>
			<div className="flex flex-col sm:flex-row justify-center gap-6 p-8">
				<Card url="https://highwiredaze.com/2025/05/23/theluckyeffectwfnm1/" img="/img/news/highwiredaze.webp" alt="">
					<div className="flex flex-col gap-1 px-8">
						<h2 className="font-bold text-xl">The Lucky Effect at Hotel Ziggy - Live Review</h2>
						<p>May 23, 2025</p>
					</div>
				</Card>
				<Card url="https://boldjourney.com/meet-the-lucky-effect/" img="/img/news/boldjourney.webp" alt="">
					<div className="flex flex-col gap-1 px-8">
						<h2 className="font-bold text-xl">Bold Journey Magazine - "Meet The Lucky Effect"</h2>
						<p>April 2, 2025</p>
					</div>
				</Card>
			</div>
		</section>
	)
}

function Music() {
	return (
		<section className="p-2 md:p-6">
			<h1 className="underline underline-offset-6 uppercase tracking-widest text-xl font-bold">Top Track</h1>
			{/* Spotify singles widget */}
			<SpotifyWidget max={1} />
			<Button label="View All" end="/preview/music" />
		</section>
	)
}

function Tour() {
	return (
		<section className="py-10 px-6 md:px-50">
			<h1 className="underline underline-offset-6 uppercase tracking-widest text-xl font-bold">Live Dates</h1>
			{/* BandsInTown widget */}
			<TourWidget max="3" />
		</section>
	)
}

// function Store() {
// 	return (
// 		<section className="p-2 md:p-6">
// 			<h1 className="underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Store</h1>
// 			{/* Shopify item widget */}
// 			<Button label="Shop Here" end="https://www.store.theluckyeffect.com" />
// 		</section>
// 	)
// }

function Video() {
	return (
		<section className="p-2 md:p-6">
			<h1 className="underline underline-offset-6 uppercase tracking-widest text-xl font-bold">Performance Recaps</h1>
			{/* Youtube widget small */}
			<YoutubeWidget />
			<Button label="Watch More" end="https://www.youtube.com/@TheLuckyEffect77" />
		</section>
	)
}

export default function Home() {
	return (
		<main>
			<HeroVideo />

			<div className="flex flex-col gap-0 text-center mb-10">
				<Music />
				<Tour />
				<Testimonials />
				{/* <Store /> */}
				<Video />
				<News />
				{/* Subscription */}
			</div>
		</main>
	)
}
