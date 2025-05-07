import { YoutubeVideos } from "@/app/_components/widgets/YoutubeWidget"

export default function Video() {
  return (
    <main className="min-h-screen bg-top bg-home text-white text-center justify-center px-20 py-8">
      <div className="heading-spacer" />
      <h1 className="text-3xl font-bold md:text-5xl">Videos</h1>
      <section className="">
        <YoutubeVideos />
      </section>
    </main>
  )
}
