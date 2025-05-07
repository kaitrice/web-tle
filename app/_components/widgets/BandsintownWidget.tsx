import { getTourDates } from "@/app/_data/bandsintown"
import { Track } from "@/app/_types/spotify.types"
import React from "react"

function TourDate(show: Track) {
    const images = show.
    // console.log(images)

    return (
        <div className="flex flex-col items-center justify-start text-center">
            
        </div>
    )
}

export default async function BandsintownWidget() {
    const data = await getTourDates()
    const tourDates = data
    console.log('tourDates:', tourDates)

    return (
        <section className="flex justify-center gap-6 p-8 bg-neutral-800 rounded-xl">
            {tourDates ?
                tourDates.map((track: Track) => (
                    <Card key={track.id} {...track} />
                )) :
                <>no tour dates available</>
            }
        </section>
    )
}