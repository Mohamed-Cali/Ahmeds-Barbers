
import './globals.css'
import {AiOutlineClose} from "react-icons/ai"
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Catamaran, Roboto_Mono } from 'next/font/google';

const inter = Catamaran({
  subsets: ['latin'],
  display: 'swap'
});


export default function RootLayout({ children}) {


  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
