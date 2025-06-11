import { Card } from "@/app/_components/common/Card"
import { Hero } from "@/app/_components/common/Hero"

function Gallery() {
  return (
    <div id="band" className="flex flex-col sm:flex-row w-full justify-center">
        <Card url="/preview/about#band" img="/img/moses.webp" alt="Moses Navarro" flag>
          <div>
            <p className="text-lg tracking-wide">Moses Navarro</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Guitarist</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Co Lead Singer/Songwriter</p>
          </div>
        </Card>
        <Card url="/preview/about#band" img="/img/ian.webp" alt="Ian East" flag>
          <div>
            <p className="text-lg tracking-wide">Ian East</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Guitarist</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Co Lead Singer/Songwriter</p>
          </div>
        </Card>
        <Card url="/preview/about#band" img="/img/patrick.webp" alt="Patrick East" flag>
          <div>
            <p className="text-lg tracking-wide">Patrick East</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Bassist</p>
          </div>
        </Card>
        <Card url="/preview/about#band" img="/img/kai.webp" alt="Kai" flag>
          <div>
            <p className="text-lg tracking-wide">Kai</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Drummer</p>
          </div>
        </Card>
    </div>
  )
}

export default function About() {
  return (
    <main className="min-h-screen text-center justify-center px-15">
      <div className="heading-spacer" />

        <Hero />

      <section className="flex flex-col gap-4 sm:text-lg p-6">
        <p>The Lucky Effect is an indie-pop / alternative rock band from Southern California. Known for their high-energy live shows, catchy tunes, and authenticity, the band blends infectious pop melodies with rock-rooted intensity, drawing from a wide range of musical education and influences. The Lucky Effect is reimagining conventional pop into something entirely their own.</p>
        
        <p>Their show at Hotel Ziggy in West Hollywood (May 13, 2025) garnered rave reviews. Highwire Daze praised their “absolutely exhilarating set” and cheered that they "nearly blew the roof off the Hotel Ziggy.” The band received kudos for delivering “superbly infectious tunes and good-time demeanor,” powered by a “devastatingly talented rhythm section”. Their single "Call It Love" was hailed as “a song that should be raging all over the worldwide radio airwaves” .</p>
        
        <Gallery />
        
        <p>Co lead by duel guitarist and singers Moses Navarro and Ian East, supported by Patrick East on bass and Kaiawe Miyasato on drums, The Lucky Effect delivers a blend of high energy and raw emotion. Their synergy has been noted as a driving force behind their “charged” live aura.</p>
        
        <p>The band has been featured across Los Angeles and Orange County, including standout appearances at Hotel Ziggy, Fiesta Hermosa, and upcoming dates at Kiss Kiss Bang Bang (June 27, 2025) and The Mint in LA (July 10, 2025). Their live reputation continues to grow as they headline dynamic indie-pop lineups.</p>
      </section>
    </main>
  )
}
