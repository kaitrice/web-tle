import Nav from "../common/Navigation"
import Banner from "../common/Banner"

export default function Header() {
  const banner = false

  return (
    <header className="absolute top-0 w-full z-1 text-white ">
      {banner ? <Banner /> : null}

      <Nav />
    </header>
  )
}
