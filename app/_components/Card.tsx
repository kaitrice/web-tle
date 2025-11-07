import Image from "next/image"

export function Card({ img, alt, url, children }: { img: string; alt: string; url: string; children?: React.ReactNode; }) {
    return (
        <a target="_blank" href={url}>
            <div className="group w-full max-w-sm flex flex-col items-center">
                <div className="relative w-full overflow-hidden">
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

                <div className="mt-4 w-full text-center group-hover:[&_h2]:underline group-hover:[&_h2]:underline-offset-6">
                    {children}
                </div>
            </div>
        </a>
    )
}