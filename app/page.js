
import Reviews from '@/components/Reviews';
import { Catamaran} from 'next/font/google';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';



const catamaran = Catamaran({
  subsets: ['latin'],
  variable: '--font-catamaran'
});

export default function Home( ) {

  return (
    <div className={`${catamaran.variable} font-catamaran`}>
      <Hero />

      <About />

      <Services />

      <Reviews />

      <Contact />
    </div>

  )
}
