import Link from "next/link"
import Socials from "./Socials"
import { footer } from "lib/data/footer"

function Subscription() {
  return (
    <section className="flex-1 max-w-md">
      <h2 className="uppercase tracking-widest text-xl font-bold mb-2">
        Subscribe to our newsletter
      </h2>
      <p className="mb-4">Stay up to date with all the latest concerts and events.</p>
      <iframe
        src="https://bandsintown.com/artist/15591806/email_signup_form?headerTextColor=rgba(30,41,59,1)&backgroundColor=rgba(155,156,122,0)&ctaBackgroundColor=rgba(0,180,179,0)&title=&headerTextStyle=normal&headerText=&font=Cabin&ctaIcon=hide&ctaBorderRadius=0px&ctaBorderWidth=2px&ctaBorderColor=rgba(249,115,22,1)&ctaFontColor=rgba(30,41,59,1)&alignment=left&emailInputField=show&ctaLabel=Subscribe&layout=narrow&locale=en&ctaSize=small"
        className="w-full h-[180px]"
        title="newsletter-widget"
      ></iframe>
    </section>
  )
}

function Contact() {
  return (
    <section className="flex-1 max-w-md">
      <div className="flex flex-col gap-2 pb-2 lg:pb-6">
        <h2 className="uppercase tracking-widest text-xl font-bold mb-2">
          {footer.contact.name}
        </h2>
        <p className="text-base">
          Email:&nbsp;
          <Link
            href={`mailto:${footer.contact.email}`}
            className="hover:underline hover:underline-offset-6"
          >
            {footer.contact.email}
          </Link>
        </p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <Socials flag={false} />
      </div>
    </section>
  )
}

function Copyright() {
  return (
    <section className="w-full text-center">
      ©{new Date().getFullYear()} {footer.company} | Web design by
      <Link
        className="text-end hover:underline hover:underline-offset-6 pl-1"
        href={footer.dev.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {footer.dev.name}
      </Link>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center text-center pb-4 px-6 lg:px-80 xl:px-100 pt-12 xl:pt-6 text-sm">
      <div className="w-full flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-evenly lg:text-left gap-10 pb-2">
        <Contact />
        <Subscription />
      </div>

      <Copyright />
    </footer>


  )
}
