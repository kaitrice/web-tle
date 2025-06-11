import SpotifyWidget from "@/app/_components/widgets/SpotifyWidget";

export default function Music() {
  return (
    <main className="min-h-screen text-center justify-center px-15">
      <div className="heading-spacer" />
      <section className="">
        <h1 className="uppercase tracking-widest text-4xl font-bold">Music</h1>
        <SpotifyWidget />
      </section>
    </main>
  )
}
