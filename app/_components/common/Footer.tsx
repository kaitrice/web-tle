import Socials from "./Socials";

function Copyright() {
  return (
    <span>
      ©{new Date().getFullYear()} The Lucky Effect, LLC. | Web design by
      <a
        className="flex-1 text-end hover:underline hover:underline-offset-6 pl-1"
        href="https://kaitrice.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kait Rice
      </a>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="relative flex gap-10 flex-wrap justify-center bg-gray-800 text-white py-3">
      <Copyright />
      <Socials />
    </footer>
  );
}
