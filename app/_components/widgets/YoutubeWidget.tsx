'use client'
import { videoMap } from "@/app/_util/util"
import { useState } from "react";

function Player({ src }: { src: string }) {
    return (
        <iframe
            src={src}
            className="w-full aspect-video rounded-lg shadow-lg"
            allow="autoplay encrypted-media"
            allowFullScreen
        />
    )
}

export function YoutubeWidget() {
    const videos = Object.values(videoMap);
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % videos.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section className="p-8 flex justify-center items-center gap-4">
            {/* Left Arrow */}
            <button 
                onClick={prev}
                className="p-3 rounded-full hover:bg-gray-300 transition"
            >
                &#8592;
            </button>

            {/* Video */}
            <div className="w-full max-w-5xl">
                <Player src={videos[current]} />
            </div>

            {/* Right Arrow */}
            <button 
                onClick={next}
                className="p-3 rounded-full hover:bg-gray-300 transition"
            >
                &#8594;
            </button>
        </section>
    );
}