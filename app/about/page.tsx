import { press } from "../_data/press_testdata"
import { band } from "../_data/band_testdata"
import { Card } from "../_components/Card"
import { Button } from "../_components/Button"

function News() {
  return (
    <section id="news" className="pb-6">
      <h1 className="text-center uppercase tracking-widest text-xl md:text-4xl font-bold pt-2 md:pt-8 ps-4">In the news</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-2 md:p-6">
        {press.map((item, index) => (
          <Card key={index} img={item.img} alt={item.alt}>
            <div className="flex flex-col gap-1 px-8">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-gray-400 uppercase tracking-widest text-sm">{item.date}</p>
              <Button url={item.url} cta="Read More" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function BandGallery() {
  return (
    <section id="band" className="w-full pb-6">
      <h1 className="text-center uppercase tracking-widest text-2xl md:text-4xl font-bold pt-2 md:pt-8 ps-4">The Band</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-2 md:p-6">
        {band.map((item, index) => (
          <Card key={index}  img={item.img} alt={`Photo of ${item.name}`}>
            <div>
              <p className="font-bold text-lg tracking-wide">{item.name}</p>
              {item.role.map((role, ix) => (
                <p key={ix} className="text-gray-400 uppercase tracking-widest text-sm">{role}</p>
                
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main className="min-h-screen text-center justify-center px-6 xl:px-100">
      <div className="heading-spacer" />
      <BandGallery />
      <News />
      <div className="w-full border-2" />
    </main>
  )
}
