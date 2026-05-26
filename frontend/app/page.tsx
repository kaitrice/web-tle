import { Hero } from "@home/Hero";
import Store from "@home/Store";
import Music from "@home/Music";
import Tour from "@home/Tour";

export default async function Home() {
	return (
		<main>
			<Hero />
			<div className="text-center">
				{await Music()}
				{await Store()}
				<Tour />
				<div className="w-full border-2" />
			</div>
		</main>
	)
}
