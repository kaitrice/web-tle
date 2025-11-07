import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col px-20 text-center">
      <div className="heading-spacer" />
      <h1 className="uppercase tracking-widest text-4xl font-bold my-8">Contact</h1>

      <div className="flex-1 flex flex-col justify-center items-center">
        <h2 className="uppercase tracking-widest text-xl font-bold my-8">Bookings</h2>
        <Link href="mailto:theluckyeffect77@gmail.com" className="text-lg hover:underline hover:underline-offset-6">
          theluckyeffect77@gmail.com
        </Link>
      </div>
    </main>
  )
}
