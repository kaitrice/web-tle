import Image from "next/image"
import Link from "next/link";

export function Card({ url, img, alt, flag, children }: { url: string; img: string; alt: string; flag?: boolean; children?: React.ReactNode; }) {
	return (
		<Link href={url} className="w-full max-w-sm flex flex-col items-center">
			<div className="relative w-full overflow-hidden shadow-lg group">
				{/* Full-card overlay */}
				{flag && (
					<div className="absolute inset-0 flex justify-center items-center bg-black/40 text-white text-xs font-semibold px-3 py-1 rounded z-10 shadow transition-opacity duration-300 opacity-0 group-hover:opacity-100">
						{children}
					</div>
				)}

				{/* Image */}
				<div className="w-full h-64 overflow-hidden">
					<Image
						src={img}
						alt={alt}
						width={1000}
						height={1000}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>
			</div>

			{/* Children content under the card if no flag */}
			{!flag && (
				<div className="mt-4 w-full text-center">{children}</div>
			)}
		</Link>
	)
}

export function CardSquare({ img, alt, flag, children }: { img: string; alt: string; flag?: boolean; children?: React.ReactNode; }) {
	return (
		<section className="w-full max-w-lg flex flex-col items-center">
			<div className="relative w-full overflow-hidden shadow-lg group">
				{/* Full-card overlay */}
				{flag && (
					<div className="absolute inset-0 flex justify-center items-center bg-black/40 text-white text-xs font-semibold px-3 py-1 rounded z-10 shadow transition-opacity duration-300 opacity-0 group-hover:opacity-100">
						{children}
					</div>
				)}

				{/* Image */}
				<div className="w-full overflow-hidden">
					<Image
						src={img}
						alt={alt}
						width={1000}
						height={1000}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>
			</div>

			{/* Children content under the card if no flag */}
			{!flag && (
				<div className="mt-4 w-full text-center">{children}</div>
			)}
		</section>
	)
}


// function Card(track: Track) {
// 	const images = track.album.images

// 	return (
// 		<div className="flex flex-col items-center justify-start text-center">
// 			<div className="w-[200px] md:w-[300px] lg:w-[400px] text-center">
// 				{images.length > 0 && (
// 					<Image
// 						aria-hidden
// 						src={images[0].url}
// 						alt={`${track.name} cover image`}
// 						width={100}
// 						height={100}
// 						sizes="(min-width: 640px) 200px, 150px"
// 						className="w-full h-auto"
// 					/>
// 				)}
// 				<h1 className="text-lg sm:text-2xl font-bold mt-4 break-words">
// 					{track.name}
// 				</h1>
// 			</div>
// 		</div>
// 	)
// }