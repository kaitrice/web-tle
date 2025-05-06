import Hero from "../_components/common/Hero";
import SpotifyWidget from "../_components/widgets/SpotifyWidget";
import { YoutubeWidget } from "../_components/widgets/YoutubeWidget";

function Music() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Music</h2>
      {/* Spotify singles widget */}
      <SpotifyWidget />
    </section>
  )
}

function Tour() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Upcoming Shows</h2>
      {/* BandsInTown widget */}
    </section>
  )
}

function Store() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Store</h2>
      {/* Shoptify item widget */}
    </section>
  )
}

function Video() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 sm:text-4xl md:text-6xl">Video</h2>
      {/* Youtube widget small */}
      <YoutubeWidget />
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />

      <main className="flex flex-col gap-16 text-center p-8">
        <Music />
        <Tour />
        <Store />
        <Video />
      </main>
    </div>
  );
}
