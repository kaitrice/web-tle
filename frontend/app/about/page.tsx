import { BandGallery } from "@about/Gallery";
import { News } from "@about/News";

export default function About() {
  return (
    <main className="text-center mt-2">
      <div className="heading-spacer" />
      <BandGallery />
      <News />
      <div className="w-full border-2" />
    </main>
  )
}
