import Link from "next/link"
import Socials from "./Socials"

function Subscription() {
  return (
    <section className="flex flex-col w-full">
      <h2 className="uppercase tracking-widest text-2xl font-bold">Subscribe to our newsletter</h2>
      <p>Stay up to date with all the latest concerts and events.</p>
      <iframe src="https://bandsintown.com/artist/15591806/email_signup_form?headerTextColor=rgba(30,41,59,1)&backgroundColor=rgba(155,156,122,0)&ctaBackgroundColor=rgba(0,180,179,1)&title=&headerTextStyle=normal&headerText=&font=Cabin&ctaIcon=hide&ctaBorderRadius=0px&ctaBorderWidth=2px&ctaBorderColor=rgba(0,180,179,1)&ctaFontColor=rgba(255,255,255,1)&alignment=left&emailInputField=show&ctaLabel=Subscribe&layout=narrow&locale=en&ctaSize=small" width="100%" height="220px" title="newsletter-widget"></iframe>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="uppercase tracking-widest text-xl font-bold mb-2">Management & Bookings</h2>
        <p className="text-lg">Email:&nbsp;
          <Link href="mailto:theluckyeffect77@gmail.com" className="hover:underline hover:underline-offset-6">
            theluckyeffect77@gmail.com
          </Link>
        </p>
      </div>
      <Socials />
    </section>
  )
}

function Copyright() {
  return (
    <section className="text-center">
      ©{new Date().getFullYear()} The Lucky Effect, LLC. | Web design by
      <Link
        className="flex-1 text-end hover:underline hover:underline-offset-6 pl-1"
        href="https://kaitrice.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kait Rice
      </Link>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="w-full flex flex-col pb-4 px-2 sm:px-100">
      <div className="w-full flex justify-between border-t-2 pt-12">
        {/* <Socials /> */}
        <Subscription />
        <Contact />
      </div>
      <Copyright />
    </footer>
  )
}
