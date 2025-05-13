import Link from "next/link"
import Logo from "./Logo"

const nav_links = [
	{ subdir: "/preview/music", name: <>Music</>, disabled: false },
	{ subdir: "/preview/video", name: <>Video</>, disabled: false },
	{ subdir: "/preview/tour", name: <>Tour</>, disabled: false },
	{ subdir: "/preview", name: <Logo />},
	{ subdir: "https://www.store.theluckyeffect.com/", name: <>Store</>, disabled: true },
	{ subdir: "/preview/about", name: <>About</>, disabled: false },
	{ subdir: "/preview/contact", name: <>Contact</>, disabled: false },
]

function Hamburger() {

}

export default function Nav() {
	return (
		<nav className="fixed top-0 min-w-screen flex items-center justify-center font-bold bg-black/70 text-neutral-100 gap-2 text-xs p-4 sm:gap-12 md:text-base">
			{/* <Logo /> */}
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
		</nav>
	)
}