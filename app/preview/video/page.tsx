import { YoutubeVideos } from "@/app/_components/widgets/YoutubeWidget"

export default function Video() {
  return (
    <div className="min-h-screen bg-top bg-home text-white">
      <div className="heading-spacer" />
      <section className="px-20 py-8 text-center justify-center">
        <h1 className="text-3xl font-bold md:text-5xl">Videos</h1>
        <YoutubeVideos />
      </section>
    </div>
  )
}
