import Image from "next/image";
import { Streaming, Album as AlbumType, Artist } from "@/app/types";
import { getData } from "@/app/lib/getData";

function AlbumCover({ img, alt }: { img: string; alt: string }) {
  return (
    <div className="relative w-full overflow-hidden shadow-lg group">
      <Image
        src={img}
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

function Album({ data }: { data: AlbumType }) {
  return (
    <div className="w-xs flex flex-col items-center">
      <AlbumCover img={data.cover_image} alt={`${data.name} ${data.type} cover`} />
      <div className="w-full flex flex-col gap-2 text-center mt-4 px-8">
        <h2 className="font-bold text-lg sm:text-2xl">{data.name}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs">{data.type}</p>
        <SteamingLinks urls={data.links} />
      </div>
    </div>
  )
}

export default async function Music() {
  const artistData = await getData()

  if (!artistData) return (
    <section id="music">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Our Releases</h1>
      <div className="flex flex-col gap-2 items-center justify-center ps-6 py-12">
        <p className="font-bold text-xl">Oops!</p>
        <p>We has an issue retrieving our newest releases. We're sorry for the inconvenience.</p>
        <p>Please try reloading your browser. If problem persists, please try again later.</p>
      </div>
    </section>
  )

  const { discography } = artistData

  return (
    <section id="music" className="mt-12 px-6 xl:px-100">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Our Releases</h1>
      {discography.singles.length > 0 &&
        <div id="discography-singes">
          <h2 className="font-bold text-xl my-2">Singles & EPs</h2>
          <div className="flex flex-col xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
            {discography.singles.map((item, index) => (
              <Album key={index} data={item} />
            ))}
          </div>
        </div>
      }
      {discography.albums.length > 0 &&
        <div id="discography-singes">
          <h2 className="font-bold text-xl mt-2">Albums</h2>
          <div className="flex flex-col xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
            {discography.albums.map((item, index) => (
              <Album key={index} data={item} />
            ))}
          </div>
        </div>
      }
      {discography.appears_on.length > 0 &&
        <div id="discography-singes">
          <h2 className="font-bold text-xl mt-2">Featured on</h2>
          <div className="flex flex-col xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
            {discography.appears_on.map((item, index) => (
              <Album key={index} data={item} />
            ))}
          </div>
        </div>
      }
    </section>
  )
}
