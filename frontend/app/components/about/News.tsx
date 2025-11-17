import { Card } from "../Card";
import { press } from "../../data/press";

export function News() {
  return (
    <section id="news" className="pb-6">
      <h1 className="uppercase tracking-widest text-xl md:text-4xl font-bold pt-2 md:pt-8">In the press</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly p-2 md:p-6">
        {press.map((item, index) => (
          <Card key={index} img={item.img} alt={item.alt} url={item.url}>
              <div className="flex flex-col gap-1 px-8">
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-gray-400 uppercase tracking-widest text-sm">{item.date}</p>
              </div>
            </Card>
        ))}
      </div>
    </section>
  )
}