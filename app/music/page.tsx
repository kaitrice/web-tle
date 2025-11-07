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
    <div className="flex flex-col gap-4 sm:flex-row justify-around mt-4">
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
    <section className="w-full max-w-lg flex flex-col items-center">
      <AlbumCover img={data.images[0]} alt={`${data.name} ${data.album_type} cover`} />
      <div className="w-full flex flex-col gap-2 text-center mt-4 px-8">
        <h2 className="font-bold text-lg sm:text-2xl">{data.name}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs">{data.album_type}</p>
        <SteamingLinks urls={data.external_urls} />
      </div>
    </section>
  )
}

export default function Music() {
  return (
    <main className="min-h-screen text-center justify-center px-6 xl:px-100">
      <div className="heading-spacer" />
      <h1 className="text-center uppercase tracking-widest text-2xl md:text-4xl font-bold pt-2 md:pt-8 ps-4">Listen to our Music</h1>
      <div className="flex flex-wrap xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
        {music.map((item, index) => (
          <Track key={index} data={item} />
        ))}
      </div>
      <div className="w-full border-2" />
    </main>
  )
}
