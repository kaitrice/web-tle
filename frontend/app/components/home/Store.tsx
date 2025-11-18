import { products } from "@/app/data/products"
import { Card } from "../Card"
import { Product as ProductType } from "@/app/types"

function Product({ data }: { data: ProductType }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center">
      <Card img={data.img} alt={`Photo of ${data.color} ${data.type}`} url={data.url} />
      <div>
        <h2 className="uppercase font-bold text-lg pb-2">{data.type}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-sm pb-12">${data.price + 0.0} {data.currency}</p>
        <a href={data.url} className="border-2 border-orange-500 font-bold px-4 py-2 hover:opacity-50 cursor-pointer">
          shop now
        </a>
      </div>
    </div>
  )
}

export default function Store() {
  return (
    <section id="store" className="pt-12 px-6 xl:px-100">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Merch</h1>
      <div className="flex flex-col gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
        {products.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
    </section>
  )
}