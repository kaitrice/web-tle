import { Hero } from "@home/Hero";
import Store from "@home/Store";
import Music from "@home/Music";
import Tour from "@home/Tour";

export default function Home() {
	return (
		<main>
			<Hero />
			<div className="text-center">
				<Store />
				<Music />
				<Tour />
				<div className="w-full border-2" />
			</div>
		</main>
	)
}
