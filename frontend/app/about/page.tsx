import { BandGallery } from "@about/Gallery";
import { News } from "@about/News";

export default async  function About() {
  return (
    <main className="text-center mt-2">
      <div className="heading-spacer" />
      {await BandGallery()}
      {await News()}
      <div className="w-full border-2" />
    </main>
  )
}
