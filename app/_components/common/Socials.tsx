import Link from "next/link";
import Image from "next/image";
import { Social } from "@/app/_types/socials.type";

const socials = [
    { url: "https://www.instagram.com/theluckyeffectt/", icon: "/svg/white/icons8-instagram.svg", alt: "Instagram icon", disabled: false },
    { url: "https://www.tiktok.com/@theluckyeffectt?lang=en", icon: "/svg/white/icons8-tiktok.svg", alt: "TikTok icon", disabled: false },
    { url: "https://www.youtube.com/@TheLuckyEffect", icon: "/svg/white/icons8-youtube.svg", alt: "YouTube icon", disabled: false },
    { url: "mailto:theluckyeffect77@gmail.com", icon: "/svg/white/mail-white.svg", alt: "Envelope icon", disabled: false },
    { url: "https://music.apple.com/us/artist/the-lucky-effect/1790610682", icon: "/svg/white/icons8-music.svg", alt: "Apple music icon", disabled: false },
    { url: "https://open.spotify.com/artist/5Tr5sJICcc4lN5ppznL5fR", icon: "/svg/white/icons8-spotify.svg", alt: "Spotify icon", disabled: false },
    { url: "https://shop.theluckyeffect.com", icon: "/svg/white/icons8-shopify.svg", alt: "Shopify icon", disabled: true },
]

function SocialUI(data: Social) {
    const { url, icon, alt, disabled } = data

    return (
      <Link href={disabled ? "#" : url} className="hover:underline hover:underline-offset-6">
        <div>  
          <Image
            aria-hidden
            src={icon}
            alt={alt}
            width={24}
            height={24}
          />
        </div>
      </Link>
    )
}

export default function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map((item, index) => (
        <SocialUI key={index} {... item} />
      ))}
    </div>
  )
}
