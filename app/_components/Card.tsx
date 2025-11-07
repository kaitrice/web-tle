import Image from "next/image"

export function Card({ img, alt, children }: { img: string; alt: string; children?: React.ReactNode; }) {
    return (
        <div className="w-full max-w-sm flex flex-col items-center">
            <div className="relative w-full overflow-hidden group">
                <div className="w-full h-64 overflow-hidden">
                    <Image
                        src={img}
                        alt={alt}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

            <div className="mt-4 w-full text-center">{children}</div>
        </div>
    )
}