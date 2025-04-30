const socials = [
    { url: "https://www.instagram.com/theluckyeffectt/", icon: "/svg/white/icons8-instagram.svg", alt: "Instagram icon", disabled: false },
    { url: "https://www.tiktok.com/@theluckyeffectt?lang=en", icon: "/svg/white/icons8-tiktok.svg", alt: "TikTok icon", disabled: false },
    { url: "https://www.youtube.com/@TheLuckyEffect", icon: "/svg/white/icons8-youtube.svg", alt: "YouTube icon", disabled: false },
    { url: "mailto:theluckyeffect77@gmail.com", icon: "/svg/white/mail-white.svg", alt: "Envelope icon", disabled: false },
    { url: "https://music.apple.com/us/artist/the-lucky-effect/1790610682", icon: "/svg/white/icons8-music.svg", alt: "Apple music icon", disabled: false },
    { url: "https://open.spotify.com/artist/5Tr5sJICcc4lN5ppznL5fR", icon: "/svg/white/icons8-spotify.svg", alt: "Spotify icon", disabled: false },
    { url: "https://shop.theluckyeffect.com", icon: "/svg/white/icons8-shopify.svg", alt: "Shopify icon", disabled: true },
]

function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.disabled ? undefined : item.url}
          target={item.disabled ? undefined : "_blank"}
          rel={item.disabled ? undefined : "noopener noreferrer"}
          className={item.disabled ? "pointer-events-none opacity-50" : ""}
        >
          <img
            className="fill-white"
            aria-hidden
            src={item.icon}
            alt={item.alt}
            width={24}
            height={24}
          />
        </a>
      ))}
    </div>
  )
}

function Copyright() {
  return (
    <span>
      ©2025 The Lucky Effect, LLC. | Web design by
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
