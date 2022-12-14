import Main from '../components/Main'
import About from '../components/About'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Skills from '../components/Stack'
import Students from '../components/Students'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
// import Footer from '../components/Footer'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Become a Skilled Software Engineer,Without Prior Knowledge.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Students />
    <Contact />
    <Faq />
    <Footer />
    {/* <Footer /> */}
    </div>
  )
}
