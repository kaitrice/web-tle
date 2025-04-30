import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
      <Link href="/" className="hover:underline hover:underline-offset-6">
        <div>  
          <Image
            aria-hidden
            src="/img/theluckyeffect_logo_transparent.png"
            alt="The Lucky Effect Logo"
            width={90}
            height={90}
          />
        </div>
      </Link>
    )
  }
  