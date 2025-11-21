'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import Socials from "./Socials"
import Link from "next/link"
import { nav_links } from "lib/data/nav"

function Logo() {
	return (
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
	)
}

function Navigation() {
	return (
		<div className="flex gap-6 sm:gap-12 font-bold text-sm md:text-base">
			{nav_links.map((item, index) =>
				<a key={index} href={item.subdir} className="hover:underline hover:underline-offset-6" target={item.blank ? "_blank" : undefined}>
					{item.name}
				</a>
			)}
		</div>
	)
}

export default function Header() {
	const pathname = usePathname()
	const isHome = pathname === '/' || pathname === '/preview'

	return (
		<header className={`absolute top-0 z-1 w-full ${isHome ? 'text-neutral-100' : ''}`}>
			<nav className="w-full flex flex-col gap-2 md:flex-row md:gap-0 items-center justify-between py-4 px-6 xl:px-12 2xl:px-100">
				<Link href="/">
					<Logo />
				</Link>
				<Navigation />
				<Socials flag={isHome} />
			</nav>
		</header>
	)
}
