import { members as member_data } from "lib/data/members";
import { Member } from "@types";
import { Card } from "../Card";

export async function BandGallery() {
  const members: Member[] = member_data

  return (
    <section id="band" className="w-full pb-6">
      <h1 className="uppercase tracking-widest text-4xl font-bold">Meet the Band</h1>
      <div className="flex flex-col lg:flex-wrap lg:flex-row items-center justify-evenly gap-6 p-6">
        {members.map((item, index) => (
          <Card key={index} img={item.img} alt={`Photo of ${item.name}`} url={item.social}>
            <div className="flex flex-col gap-1 px-8">
              <h2 className="font-bold text-xl">{item.name}</h2>
              <div className="flex flex-col">
                {item.role.map((role, ix) => (
                  <p key={ix} className="text-gray-400 uppercase tracking-widest text-sm">{role}</p>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}