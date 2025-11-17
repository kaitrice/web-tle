import { band } from "../../data/band";
import { Card } from "../Card";

export function BandGallery() {
  return (
    <section id="band" className="w-full pb-6">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Meet the Band</h1>
      <div className="flex flex-col xl:flex-wrap md:flex-row items-center justify-evenly gap-6 p-2 md:p-6">
        {band.map((item, index) => (
          <Card key={index} img={item.img} alt={`Photo of ${item.name}`} url={item.social}>
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