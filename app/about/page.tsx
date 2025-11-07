import Image from "next/image"
import { press } from "../_data/press_testdata";
import { band } from "../_data/band_testdata";

function Card({ img, alt, children }: { img: string; alt: string; flag?: boolean; children?: React.ReactNode; }) {
	return (
		<div className="w-full max-w-sm flex flex-col items-center">
			<div className="relative w-full overflow-hidden shadow-lg group">
				<div className="w-full h-64 overflow-hidden">
					<Image
						src={img}
						alt={alt}
						width={1000}
						height={1000}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>
			</div>

			<div className="mt-4 w-full text-center">{children}</div>
		</div>
	)
}

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
              <a href={item.url} target="blank">
                <button className="p-2 border-2 border-orange-500">
                  Read More
                </button>
              </a>
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
