import "../globals.css"
import Header from "../_components/common/Header"
import Footer from "../_components/common/Footer"

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <div className="text-slate-800 bg-orange-50">
      <Header />
      {children}
      <Footer />
   </div>
  )
}
