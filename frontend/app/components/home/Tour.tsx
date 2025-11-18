import { TourWidget } from "./BiTWidget";

export default function Tour() {
    return (
        <section id="tour" className="shows-bg pt-12 px-6 xl:px-60">
            <h1 className="uppercase tracking-widest text-4xl font-bold">Live Shows</h1>
            <TourWidget />
        </section>
    )
}