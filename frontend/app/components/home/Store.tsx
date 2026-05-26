import { products as product_data } from "lib/data/products";
import { Product as ProductType } from "@types"
import { Card } from "../Card"

function Product({ data }: { data: ProductType }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-24 py-6">
      <div className="h-64 w-64 md:h-72 md:w-72 flex items-center bg-orange-500/25 rounded-full overflow-hidden p-6 mb-6">
        <Card
          img={data.img}
          alt={`Photo of ${data.color} ${data.type}`}
          url={data.url}
        />
      </div>

      <div className="flex flex-col items-center gap-2 md:items-start text-center md:text-left uppercase">
        <h2 className="font-bold text-xl">{data.type}</h2>
        <p className="text-gray-400 tracking-widest text-sm sm:text-base pb-6">
          ${data.price + 0.0} {data.currency}
        </p>
        <a href={data.url} className="btn px-4 py-2" >
          shop now
        </a>
      </div>
    </div>
  )
}

export default async function Store() {
  const products: ProductType[] = product_data

  return (
    <section id="store" className="pt-12 px-6 xl:px-60">
      <h1 className="uppercase tracking-widest text-4xl font-bold">Merch</h1>
      <div className="flex flex-col gap-6 justify-evenly items-center py-12">
        {products.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
    </section>
  )
}