import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../../components/header";
import ActiveSectionContextProvider from "../../context/active-section-context";
import Footer from "../../components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({subsets: ['latin'] })

export const metadata = {
  title: 'Bajinder | Portfolio',
  description: 'Bajinder is a senior software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body
        className={`${inter.className} bg-[#000] text-gray-950 relative pt-28 sm:pt-28`}
      >
       
        <ActiveSectionContextProvider>
        <Header />
        
            {children}
            <Footer />
            <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
