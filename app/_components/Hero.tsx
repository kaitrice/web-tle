import Link from "next/link";

export function Hero() {
	return (
		<section className="hero-bg flex justify-center items-center text-white">
			<div className="border-12 flex justify-center items-end pb-32 w-5/6 h-2/3">
				<Link href='/#music'>
					<p className="text-center w-2/3 md:w-auto border-2 p-4 font-black text-xl uppercase mx-auto">
						Listen to our latest single
					</p>
				</Link>
			</div>
		</section>
	)
}
