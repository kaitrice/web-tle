import { articles as article_data } from "lib/data/articles";
import { Article } from "@types";
import { Card } from "../Card";

export async function News() {
  const articles: Article[] = article_data
  
  return (
    <section id="news" className="pb-6">
      <h1 className="uppercase tracking-widest text-4xl font-bold pt-2 md:pt-8">In the press</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly p-2 md:p-6">
        {articles.map((item, index) => (
          <Card key={index} img={item.image} alt={`${item.name} cover`} url={item.url}>
              <div className="flex flex-col gap-1 px-8">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <p className="text-gray-400 uppercase tracking-widest text-sm">{item.date}</p>
              </div>
            </Card>
        ))}
      </div>
    </section>
  )
}