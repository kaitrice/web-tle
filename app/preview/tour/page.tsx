import BandsintownWidget from "@/app/_components/widgets/BandsintownWidget";

export default function Tour() {
  return (
    <main className="min-h-screen bg-left bg-home text-white text-center justify-center px-20 py-8">
      <div className="heading-spacer" />
      <h1 className="text-3xl font-bold md:text-5xl">Tour</h1>
      <section className="">
        <BandsintownWidget />
      </section>
    </main>
  )
}
