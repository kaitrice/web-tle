'use client'
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export function Hero() {
	return (
		<section className="hero-bg flex justify-center items-center text-white">
			<div className="border-12 flex justify-center items-end pb-32 w-5/6 h-2/3">
				<Link href='/music'>
					<p className="text-center w-2/3 md:w-auto border-2 p-4 font-black text-xl uppercase mx-auto">
						Listen to our latest single
					</p>
				</Link>
			</div>
		</section>
	)
}

export function HeroVideo() {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className="relative w-full mx-auto aspect-video">
			{showVideo ? (
				<iframe
					className="w-full h-full"
					src="https://www.youtube.com/embed/ZBXLDcOPi54?autoplay=1"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			) : (
				<div className="relative w-full h-full">
					<Image
						src="/img/hero/hero.gif"
						alt="Video preview"
						className="w-full h-full object-cover"
						loading="lazy"
						width={1000}
						height={1000}
						unoptimized
					/>
					<button
						onClick={() => setShowVideo(true)}
						className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold hover:bg-black/60 transition"
					>
						Call it love? (Live) ▶
					</button>
				</div>
			)}
		</div>
	);
}