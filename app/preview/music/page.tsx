import SpotifyWidget from "@/app/_components/widgets/SpotifyWidget";

export default function Music() {
  return (
    <main className="min-h-screen text-center justify-center px-20">
      <div className="heading-spacer" />
      <h1 className="underline underline-offset-6 underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Music</h1>
      <section className="">
        <SpotifyWidget />
      </section>
    </main>
  )
}
