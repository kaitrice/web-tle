import BandsintownWidget from "@/app/_components/widgets/BandsintownWidget";

export default function Tour() {
  return (
    <main className="min-h-screen text-center justify-center px-20">
      <div className="heading-spacer" />
      <h1 className="underline underline-offset-6 underline underline-offset-6 text-orange-900 text-2xl font-bold mb-6 sm:text-4xl md:text-6xl">Tour</h1>
      <section className="">
        <BandsintownWidget max="all" />
      </section>
    </main>
  )
}
