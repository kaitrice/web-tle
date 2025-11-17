import { products } from "../data/products"
import { Product as ProductType } from "../types/product.type"
import { Card } from "./Card"

function Product({ data }: { data: ProductType }) {
  return (
    <div className="w-xs h:xs md:h-lg p-4">
      <Card img={data.img} alt={`Photo of ${data.color} ${data.type}`} url={data.url}>
        <h2 className="uppercase font-bold pb-2">{data.type}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-sm  pb-4">${data.price + 0.0} {data.currency}</p>
      </Card>
    </div>
  )
}

export default function Store() {
  return (
    <section id="store">
      <h1 className="uppercase tracking-widest text-2xl md:text-4xl font-bold">Merch</h1>
      <div className="flex flex-col xl:flex-row gap-12 justify-evenly items-center pt-2 md:pt-8 pb-12">
        {products.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
    </section>
  )
}