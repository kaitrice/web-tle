import { getVideos } from "@/app/_data/youtube";
import { Video, Videos } from "@/app/_types/youtube.type";
import React from "react"

export default async function YoutubeWidget() {
  const data: Videos = await getVideos()
  const videos = data.items
  console.log('videos: ', videos)

  return (
    <main className="p-8">
      {videos ? 
        videos.slice(1).map((video: Video) => (
            <iframe
                key={video.id.videoId}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                className="w-full aspect-video"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        )) : 
        <></>
      }
    </main>
  );
}