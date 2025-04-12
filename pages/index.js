import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Footer from "@/components/Footer/Footer";
// import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/Herosection/HeroSection";
import WorkSection from "@/components/Herosection/WorkSection";
import FeatureSection from "@/components/Herosection/FeatureSection";
import SocialtoolSection from "@/components/Herosection/SocialtoolSection";
import Header from "@/components/Navbar/Header";
import VideoGeneration from "@/components/Videogeneration/Videogeneration";
import VideoCreationProcess from "@/components/VideoCreationProcess/VideoCreationProcess";
import FeatureShowcase from "@/components/FeatureShowcase/FeatureShowcase";
import FeaturesHighlight from "@/components/FeaturesHighlight/FeaturesHighlight";
import PlatformSupport from "@/components/PlatformSupport/PlatformSupport";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Immverse AI</title>
        <meta name="description" content="Demo Develope by Siddhesh Ujjainkar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Aiicon.jpeg" />
      </Head>
      <div
      // className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Header />
          <HeroSection />
          <VideoGeneration/>
          <WorkSection/>
          <VideoCreationProcess/>
          <FeatureSection/>
          <FeatureShowcase/>
          <SocialtoolSection/>
          <PlatformSupport/>
          {/* <Experience /> */}
        </main>
        {/* <footer className={styles.footer}>
          <Footer />
        </footer> */}
      </div>
    </>
  );
}
