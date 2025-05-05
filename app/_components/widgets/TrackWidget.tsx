import { getTracks } from "@/app/_data/spotify";
import React from "react"

export default async function TrackWidget() {
  const data = await getTracks()
  const tracks = data.tracks
  // console.log('tracks:', tracks);

  return (
    <main className="p-8">
      {tracks ? 
        tracks.map((track: any) => (
          <h1 key={track.id} className="text-2xl font-bold">
            {track.name}
          </h1>
        )) : 
        <></>
      }
    </main>
  );
}