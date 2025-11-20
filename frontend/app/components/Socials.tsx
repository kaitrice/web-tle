import { SocialMedia } from "@types";
import Image from "next/image"

const socials = [
  { url: "https://www.instagram.com/theluckyeffectt/", icon: "/svg/black/instagram.svg", alt: "Instagram icon", disabled: false },
  { url: "https://www.tiktok.com/@theluckyeffectt?lang=en", icon: "/svg/black/tiktok.svg", alt: "TikTok icon", disabled: false },
  { url: "https://www.youtube.com/@TheLuckyEffect77", icon: "/svg/black/youtube.svg", alt: "YouTube icon", disabled: false },
  { url: "https://music.apple.com/us/artist/the-lucky-effect/1790610682", icon: "/svg/black/apple.svg", alt: "Apple music icon", disabled: false },
  { url: "https://open.spotify.com/artist/5Tr5sJICcc4lN5ppznL5fR", icon: "/svg/black/spotify.svg", alt: "Spotify icon", disabled: false },
]

function SocialUI({ data, flag }: {data: SocialMedia, flag: boolean;}) {
  const { url, alt } = data
  let { icon } = data

  if (flag) {
    icon = icon.replace("black", "white")
  }

  return (
    <a target="_blank" href={url} className="hover:text-orange-500">
      <div>
        <Image
          aria-hidden
          src={icon}
          alt={alt}
          width={24}
          height={24}
        />
      </div>
    </a>
  )
}

export default function Socials({ flag }: { flag: boolean }) {
  return (
    <div className="flex gap-3">
      {socials.map((item, index) => (
        <SocialUI key={index} data={item} flag={flag} />
      ))}
    </div>
  )
}
