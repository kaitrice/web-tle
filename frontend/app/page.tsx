import { Hero } from "./_components/Hero"
import Music from "./_components/Music"
import Store from "./_components/Store"
import Tour from "./_components/Tour"

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
