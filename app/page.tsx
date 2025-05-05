import Image from "next/image";

const socials = [
  { url: "https://www.instagram.com/theluckyeffectt/", icon: "/svg/white/icons8-instagram.svg", alt: "Instagram icon", disabled: false },
  { url: "https://www.tiktok.com/@theluckyeffectt?lang=en", icon: "/svg/white/icons8-tiktok.svg", alt: "TikTok icon", disabled: false },
  { url: "https://www.youtube.com/@TheLuckyEffect", icon: "/svg/white/icons8-youtube.svg", alt: "YouTube icon", disabled: false },
  { url: "mailto:theluckyeffect77@gmail.com", icon: "/svg/white/mail-white.svg", alt: "Envelope icon", disabled: false },
  { url: "https://music.apple.com/us/artist/the-lucky-effect/1790610682", icon: "/svg/white/icons8-music.svg", alt: "Apple music icon", disabled: false },
  { url: "https://open.spotify.com/artist/5Tr5sJICcc4lN5ppznL5fR", icon: "/svg/white/icons8-spotify.svg", alt: "Spotify icon", disabled: false },
  { url: "https://shop.theluckyeffect.com", icon: "/svg/white/icons8-shopify.svg", alt: "Shopify icon", disabled: true },
]

export default function Home() {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex flex-col text-white p-8 pb-20 sm:p-20 bg-home">
      <div className="absolute inset-0 bg-black/70"></div>

      <header className="relative flex gap-6 flex-wrap">
        <Image
          aria-hidden
          src="/img/theluckyeffect_logo_transparent.png"
          alt="The Lucky Effect Logo"
          width={128}
          height={128}
        />
        <a
          className="flex-1 text-end hover:underline hover:underline-offset-6"
          href="https://bio.site/Theluckyeffect"
          target="_blank"
          rel="noopener noreferrer"
        >
          Music
        </a>
      </header>

      <main className="relative flex-1 flex flex-col gap-8 text-center items-center justify-center">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-8xl">Coming Soon!</h1>
        <p className="text-lg">Our team is working hard behind the scenes on developing the official Lucky Effect website.</p>
      </main>

      <footer className="relative flex gap-6 flex-wrap justify-center mt-8">
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
      </footer>
    </div>
  );
}
