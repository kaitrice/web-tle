import Image from "next/image";
import { music } from "../_data/music_testdata";
import { Track as TrackType } from "../_util/music.type";
import { Image as ImageType, Streaming } from "../_util/common.type";

function AlbumCover({ img, alt }: { img: ImageType; alt: string }) {
  return (
    <div className="relative w-full overflow-hidden shadow-lg group">
      <Image
        src={img.url}
        alt={alt}
        width={1000}
        height={1000}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  )
}

function SteamingLinks({ urls }: { urls: Streaming }) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row mt-4">
      <a target="_blank" href={urls.apple}>
        <Image
          src="/svg/apple_full.svg"
          alt="Apple Music logo"
          width={124}
          height={124}
        />
      </a>
      <a target="_blank" href={urls.spotify}>
        <Image
          src="/svg/spotify_full.svg"
          alt="Spotify logo"
          width={124}
          height={124}
        />
      </a>
    </div>
  )
}

function Track({ data }: { data: TrackType }) {
  return (
    <div className="w-xs flex flex-col items-center">
      <AlbumCover img={data.images[0]} alt={`${data.name} ${data.album_type} cover`} />
      <div className="w-full flex flex-col gap-2 text-center mt-4 px-8">
        <h2 className="font-bold text-lg sm:text-2xl">{data.name}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs">{data.album_type}</p>
        <SteamingLinks urls={data.external_urls} />
      </div>
    </div>
  )
}

export default function Music() {
  return (
    <section id="music">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Our Releases</h1>
      <div className="flex flex-col xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
        {music.map((item, index) => (
          <Track key={index} data={item} />
        ))}
      </div>
    </section>
  )
}
