import { BandGallery } from "../components/about/Gallery";
import { News } from "../components/about/News";

export default function About() {
  return (
    <main className="min-h-screen px-6 xl:px-100">
      <div className="heading-spacer" />
      <BandGallery />
      <News />
      <div className="w-full border-2" />
    </main>
  )
}
