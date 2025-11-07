import { testdata } from "../_util/testdata";
import { CardSquare } from "../_components/Card";
import Image from "next/image";

export default function Music() {
  return (
    <main className="min-h-screen text-center justify-center px-6 xl:px-100">
      <div className="heading-spacer" />
      <h1 className="text-center uppercase tracking-widest text-2xl md:text-4xl font-bold pt-2 md:pt-8 ps-4">Listen to our Music</h1>
      <div className="flex flex-col xl:flex-row gap-12 justify-center items-center pt-2 md:pt-8 pb-12">
        {testdata.map((item, index) => (
          <CardSquare key={index} img={item.images[0].url} alt={item.name}>
            <div className="flex flex-col gap-6 px-8">
              <h2 className="font-bold text-lg sm:text-2xl">{item.name}</h2>
              <div className="flex flex-col gap-4 sm:flex-row justify-around">
                <a target="_blank" href={item.external_urls.apple}>
                  <Image
                    src="/svg/apple_full.svg"
                    alt=""
                    width={124}
                    height={124}
                  />
                </a>
                <a target="_blank" href={item.external_urls.spotify}>
                  <Image
                    src="/svg/spotify_full.svg"
                    alt=""
                    width={124}
                    height={124}
                  />
                </a>
              </div>
            </div>
          </CardSquare>
        ))}
      </div>
      <div className="w-full border-2" />
    </main>
  )
}
