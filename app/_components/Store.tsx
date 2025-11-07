import { merch } from "../_data/merch_testdata"
import { Button } from "./Button"
import { Card } from "./Card"

function Merch({ data }: { data: any }) {
  return (
    <div className=" p-4">
      <Card img={data.img} alt={`Photo of ${data.color} ${data.type}`}>
        <div className="border-1 mb-4" />
        <h2 className="uppercase font-bold pb-2">{data.color} {data.type}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-sm  pb-4">${data.price + 0.0} {data.currency}</p>
        <Button url={data.url} cta="Shop Now" />
      </Card>
    </div>
  )
}

export default function Store() {
  return (
    <section id="store">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Merch</h1>
      <div className="flex flex-col xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
        {merch.map((item, index) => (
          <Merch key={index} data={item} />
        ))}
      </div>
    </section>
  )
}