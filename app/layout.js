import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'OCTR Technologies | AI Building Energy Optimization',
  description: 'Transform your commercial real estate with AI-powered autonomous HVAC optimization. 15-30% energy savings, zero capital investment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
