import Link from "next/link";

export function Hero() {
	return (
		<section className="hero-bg flex justify-center items-center text-white">
			<div className="border-12 flex justify-center items-center 2xl:items-end 2xl:pb-24 w-5/6 h-2/3">
				<Link href='/#music' className="max-w-2/3">
					<p className="btn text-xl px-6 py-4">
						Stream Our New Music
					</p>
				</Link>
			</div>
		</section>
	)
}
