import Link from "next/link"
import Image from "next/image"

export default function Logo() {
	return (
		<Link href="/">
			<div className="w-18 sm:w-18 md:w-24 lg:w-32">
			<Image
				aria-hidden
				src="/img/theluckyeffect_logo_transparent.png"
				alt="The Lucky Effect Logo"
				width={100}
				height={100}
				style={{ width: '100%', height: 'auto' }}
			/>
			</div>
		</Link>
	)
}
