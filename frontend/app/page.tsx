import { Hero } from "./components/home/Hero"
import Music from "./components/home/Music"
import Store from "./components/home/Store"
import Tour from "./components/home/Tour"

export default function Home() {
	return (
		<main>
			<Hero />
			<div className="pt-12 px-6 xl:px-100">
				<Store />
				<Music />
				<Tour />
				<div className="w-full border-2" />
			</div>
		</main>
	)
}
