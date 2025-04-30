import Link from "next/link"
import Logo from "./Logo"

const nav_links = [
    { subdir: "/music", name: <>Music</>, disabled: false },
    { subdir: "/video", name: <>Video</>, disabled: false },
    { subdir: "/tour", name: <>Tour</>, disabled: false },
    { subdir: "/about", name: <>About</>, disabled: false }, 
    { subdir: "/contact", name: <>Contact</>, disabled: false }, 
    { subdir: "https://www.store.theluckyeffect.com/", name: <>Store</>, disabled: true },
]

export default function Nav() {
    return (
      <nav className="font-bold bg-black/50 place-items-center flex border-b gap-2 ps-8 sm:px-20 sm:py-3 sm:gap-12">
        <Logo />
        
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