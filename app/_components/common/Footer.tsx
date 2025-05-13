import Link from "next/link"
import Socials from "./Socials"

function Copyright() {
  return (
    <span>
      ©{new Date().getFullYear()} The Lucky Effect, LLC. | Web design by
      <Link
        className="flex-1 text-end hover:underline hover:underline-offset-6 pl-1"
        href="https://kaitrice.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kait Rice
      </Link>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-3">
      <Socials />
      <Copyright />
    </footer>
  )
}
