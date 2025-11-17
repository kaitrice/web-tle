import Link from "next/link";

export function Hero() {
	return (
		<section className="hero-bg flex justify-center items-center text-white">
			<div className="border-12 flex justify-center items-end pb-32 w-5/6 h-2/3">
				<Link href='/#music' className="max-w-2/3">
					<p className="text-center md:w-auto font-black text-xl uppercase border-2 border-orange-500 hover:opacity-25 px-6 py-4 mx-auto cursor-pointer">
						Stream Our New Single
					</p>
				</Link>
			</div>
		</section>
	)
}
