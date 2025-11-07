import { Card } from "@/app/_components/Card"

function News() {
  return (
    <section id="news" className="pb-6">
      <h1 className="text-center uppercase tracking-widest text-xl md:text-4xl font-bold pt-2 md:pt-8 ps-4">In the news</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-2 md:p-6">
        <Card url="https://highwiredaze.com/2025/05/23/theluckyeffectwfnm1/" img="/img/news/highwiredaze.webp" alt="">
          <div className="flex flex-col gap-1 px-8">
            <h2 className="font-bold text-xl">The Lucky Effect at Hotel Ziggy - Live Review</h2>
            <p>May 23, 2025</p>
          </div>
        </Card>
        <Card url="https://boldjourney.com/meet-the-lucky-effect/" img="/img/news/boldjourney.webp" alt="">
          <div className="flex flex-col gap-1 px-8">
            <h2 className="font-bold text-xl">Bold Journey Magazine - &quot;Meet The Lucky Effect&quot;</h2>
            <p>April 2, 2025</p>
          </div>
        </Card>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="band" className="w-full pb-6">
      <h1 className="text-center uppercase tracking-widest text-2xl md:text-4xl font-bold pt-2 md:pt-8 ps-4">The Band</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-2 md:p-6">
        <Card url="/about#band" img="/img/band/moses.webp" alt="Moses Navarro">
          <div>
            <p className="text-lg tracking-wide">Moses Navarro</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Singer/Songwriter</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Guitarist</p>
          </div>
        </Card>
        <Card url="/about#band" img="/img/band/ian.webp" alt="Ian East">
          <div>
            <p className="text-lg tracking-wide">Ian East</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Singer/Songwriter</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Guitarist</p>
          </div>
        </Card>
        <Card url="/about#band" img="/img/band/patrick.webp" alt="Patrick East">
          <div>
            <p className="text-lg tracking-wide">Patrick East</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Bassist</p>
          </div>
        </Card>
        <Card url="/about#band" img="/img/band/kai.webp" alt="Kai">
          <div>
            <p className="text-lg tracking-wide">Kai</p>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Drummer</p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main className="min-h-screen text-center justify-center px-6 xl:px-100">
      <div className="heading-spacer" />
      <Gallery />
      <News />
      <div className="w-full border-2" />
    </main>
  )
}
