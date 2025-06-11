import { videoMap } from "@/app/_util/util"

function Player({ src }: { src: string }) {
    return (
        <div className="w-full max-w-xl">
            <iframe
                src={src}
                className="w-full aspect-video rounded-lg shadow-lg"
                allow="autoplay encrypted-media"
                allowFullScreen
            />
        </div>
    )
}

export function YoutubeWidget() {
    return (
        <section className="p-8 flex flex-wrap gap-4 sm:gap-10 justify-center">
            {Object.values(videoMap).map((src, index) => (
                <Player key={index} src={src} />
            ))}
        </section>
    )
}