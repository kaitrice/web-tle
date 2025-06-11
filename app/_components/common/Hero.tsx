'use client'
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  return (
    // <div className="
	// 	flex flex-col justify-start items-center pt-30
	// 	text-neutral-100 bg-home bg-no-repeat bg-auto min-h-[45vh] bg-cover bg-top
	// 	sm:bg-center sm:min-h-[100vh] sm:pt-60">
	// 	<h2 className="uppercase text-xl font-bold mb-2 sm:text-4xl">Anhedonia (Desert of Real)</h2>
	// 	<p className="uppercase text-5xl font-bold sm:text-8xl">Out Now!</p>
    // </div>

	<section className="relative w-full aspect-3/2 md:aspect-6/2">
		<div className="relative w-full h-full">
			<Image
				src="/img/IMG_6753.JPG"
				alt="Video preview"
				className="w-full h-full object-cover"
				loading="lazy"
				width={1000}
				height={1000}
			/>
			<div className="absolute inset-0 flex items-end justify-center bg-black/50 text-white py-2 md:py-12">
				<h1 className="uppercase tracking-widest text=xl md:text-4xl font-bold">About</h1>
			</div>
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
						src="/img/test.gif"
						alt="Video preview"
						className="w-full h-full object-cover"
						loading="lazy"
						width={1000}
						height={1000}
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