
import './globals.css'
import {AiOutlineClose} from "react-icons/ai"
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Catamaran, Roboto_Mono } from 'next/font/google';

const catamaran = Catamaran({
  subsets: ['latin'],
  variable: '--font-catamaran'
});


export default function RootLayout({ children}) {


  return (
    <html lang="en" className={`${catamaran.variable} font-catamaran`}>
      <body>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
