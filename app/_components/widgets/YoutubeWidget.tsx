import { getVideos } from "@/app/_data/youtube"
import { Video, Videos } from "@/app/_types/youtube.type"
import React from "react"

function Player(video: Video) {
    return (
        <div className="">
            <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                className="w-full aspect-video"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    )
}

export async function YoutubeWidget() {
    const data: Videos = await getVideos(5, null)
    const videos = data.items
    // console.log('videos: ', videos)

    return (
        <section className="p-8 flex flex-wrap gap-4 sm:gap-10 justify-center">
            {videos ?
                videos.slice(1).map((video: Video) => (
                    <Player key={video.id.videoId} {...video} />
                )) :
                <></>
            }
        </section>
    );
}

export async function YoutubeVideos() {
    const data: Videos = await getVideos(100, true)
    const videos = data.items
    // console.log('videos: ', videos)

    return (
        <section className="p-8 flex flex-wrap gap-4 sm:gap-10 justify-center">
            {videos ?
                videos.slice(2).map((video: Video) => (
                    <Player key={video.id.videoId} {...video} />
                )) :
                <></>
            }
        </section>
    );
}