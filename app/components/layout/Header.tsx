import Image from "next/image";
import Link from "next/link";

const nav_links = [
  {
    subdir: "/", 
    name: 
      <div>  
        <Image
          aria-hidden
          src="/img/theluckyeffect_logo_transparent.png"
          alt="The Lucky Effect Logo"
          width={90}
          height={90}
        />
      </div>, 
    disabled: false 
  },
  {
    subdir: "/music", 
    name: 
    <>Music</>, 
    disabled: false 
  },
  {
    subdir: "/video", 
    name: 
    <>Video</>, 
    disabled: false 
  },
  {
    subdir: "/tour", 
    name: 
    <>Tour</>, 
    disabled: false 
  },
  {
    subdir: "/about", 
    name: 
      <>About</>, 
    disabled: false 
  },
  {
    subdir: "/contact", 
    name: 
      <>Contact</>, 
    disabled: false 
  },
  {
    subdir: "https://www.shopify.com/", 
    name: 
      <>Store</>, 
    disabled: true 
  },
]

function Nav() {
  return (
    <nav className="font-bold bg-black/50 place-items-center flex border-b gap-2 ps-8 sm:px-20 sm:py-3 sm:gap-12">
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

function Banner() {
  return (
    <div className="bg-blue-950 text-center py-3 mb-3">
      <p className="font-bold text-lg">BANNER</p>
    </div>
  )
}

export default function Header() {
  const banner = false;

  return (
    <header className="absolute top-0 w-full z-1">
      {banner ? <Banner /> : null}

      <Nav />
    </header>
  );
}
