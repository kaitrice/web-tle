export function Button({ url, cta }: { url: string; cta: string }) {
    return (
        <a target="blank" href={url}>
            <button className="border-2 border-orange-500  hover:opacity-25 font-bold py-2 px-4 cursor-pointer">
                {cta}
            </button>
        </a>
    )
}