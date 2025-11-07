'use client'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Socials from "./Socials"

const nav_links = [
	{ subdir: "/music", name: <>Music</>, disabled: false },
	{ subdir: "https://www.youtube.com/@TheLuckyEffect77", name: <>Videos</>, disabled: false },
	{ subdir: "https://bnds.us/p601dx", name: <>Shows</>, disabled: false },
	// { subdir: "https://www.store.theluckyeffect.com/", name: <>Store</>, disabled: true },
	{ subdir: "/about", name: <>About</>, disabled: false },
]

 function Logo() {
	return (
		<>
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
		</>
	)
}

export default function Header() {
	const pathname = usePathname()
	const isHome = pathname === '/' || pathname === '/preview'

	return (
		<header className={`z-1 absolute top-0 w-full ${isHome ? 'text-neutral-100' : ''}`}>
			<nav className="w-full flex items-center justify-between py-4 px-6 lg:px-12 xl:px-100">
				<Link href={"/"}>
					<Logo />
				</Link>
				<div className="flex gap-2 sm:gap-12 font-bold text-xs md:text-base">
				{nav_links.map((item, index) =>
					item.disabled ? (
						<div key={index} className="pointer-events-none opacity-50">
							{item.name}
						</div>
					) : (
						<Link key={index} href={item.subdir} className="hover:underline hover:underline-offset-6">
							{item.name}
						</Link>
					)
				)}
				</div>
				
				<span className="hidden md:flex">
					<Socials flag={isHome} />
				</span>
			</nav>
		</header>
	)
}
