'use client'
import { useEffect, useState } from "react"

const testimonials = [
    {
        name: "Ken Morton",
        role: "Highwire Daze",
        statement: "It's always terrific to discover an amazing new band on the rise, and The Lucky Effect is ready and willing to take the listener on their journey into the big time."
    },
    {
        name: "Zoe Rutledge",
        role: "Fan",
        statement: "Their new single is on repeat, my summer anthem for sure!"
    },
    {
        name: "Jordan",
        role: "Fan",
        statement: "The way they owned that stage?? Rockstars already!"
    }
]

export default function Testimonials() {
     const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % testimonials.length)
                setFade(true)
            }, 400)
        }, 8000)

        return () => clearInterval(interval)
    }, [])

    const { name, role, statement } = testimonials[index]

    return (
        <section className="relative flex flex-col justify-center items-center text-center font-bold px-4 py-12 min-h-140 bg-cover bg-top bg-[url(/img/theluckyeffect-performance.webp)]">
            <div className="absolute inset-0 bg-black/50 z-0" />

            <div className="relative z-10 text-white">
                <p className="text-gray-300 uppercase tracking-widest text-sm pb-6">What people are saying</p>
                <div className={`max-w-4xl transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
                    <blockquote className="text-3xl md:text-5xl italic mb-6">
                        “{statement}”
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-400 uppercase tracking-widest text-sm">{role}</p>
                        <p className="font-normal text-lg">{name}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
