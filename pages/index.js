import CounterSection from '@/components/CounterSection/CounterSection'
import FooterSection from '@/components/FooterSection/FooterSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import LatestProject from '@/components/LatestProject/LatestProject'
import LogoSection from '@/components/LogoSection/LogoSection'
import ServiceSection from '@/components/ServiceSection/ServiceSection'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>rmphost</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></Script>
      <Script src="https://kit.fontawesome.com/a7d5affee1.js" crossOrigin="anonymous"></Script>

      {/* Hero Section Imported */}
      <HeroSection />

      {/* Logo Section Imported */}
      <LogoSection />

      {/* Service Section Imported */}
      <ServiceSection />

      {/* Counter Section Imported */}
      <CounterSection />

      {/* Latest Project Section Imported */}
      <LatestProject />

      {/* Footer Section Imported */}
      <FooterSection />
    </>
  )
}
