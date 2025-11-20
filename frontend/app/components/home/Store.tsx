import { fetchData } from "@/app/lib/fetchData"
import { Card } from "../Card"
import { Product as ProductType } from "@/app/types"

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

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="uppercase font-bold text-xl pb-2">{data.type}</h2>
        <p className="text-gray-400 uppercase tracking-widest text-sm sm:text-base pb-8">
          ${data.price + 0.0} {data.currency}
        </p>
        <a
          href={data.url}
          className="border-2 border-orange-500 font-bold px-4 py-2 hover:opacity-50 cursor-pointer uppercase"
        >
          shop now
        </a>
      </div>
    </div>
  )
}

export default async function Store() {
  const products: ProductType[] = await fetchData("products")

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