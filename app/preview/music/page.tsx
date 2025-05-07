import SpotifyWidget from "@/app/_components/widgets/SpotifyWidget";

export default function Music() {
  return (
    <main className="min-h-screen bg-bottom-left bg-home text-white text-center justify-center px-20 py-8">
      <div className="heading-spacer" />
      <h1 className="text-3xl font-bold md:text-5xl">Music</h1>
      <section className="">
        <SpotifyWidget />
      </section>
    </main>
  )
}
