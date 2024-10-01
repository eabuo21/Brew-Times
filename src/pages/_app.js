import { useState, useEffect } from "react";
import Head from "next/head";
import "./global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Foot from "@/components/Atoms/Nav-Atoms/Footer1.js";
import Nav1 from "@/components/Atoms/Nav-Atoms/Nav1";
import Nav2 from "@/components/Atoms/Nav-Atoms/Nav2";
import ContactFlow from "@/components/shared/Atoms/ContactFlow";
import Footer2 from "@/components/Atoms/Nav-Atoms/Footer2";
import Image from "next/image";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateWebsiteLoading = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 6000);
      });
    };

    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Brew Time - Freshly Brewed Coffee Anytime</title>
        <meta
          name="description"
          content="Brew Time offers the best freshly brewed coffee, specialty drinks, and pastries. Visit us for a relaxing coffee experience."
        />
        <meta
          name="keywords"
          content="coffee, brew, coffee shop, fresh coffee, espresso, specialty drinks, pastries, Brew Time"
        />
        <meta name="author" content="Brew Time" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Brew Time - Freshly Brewed Coffee Anytime"
        />
        <meta
          property="og:description"
          content="Visit Brew Time for the best freshly brewed coffee, specialty drinks, and pastries in town."
        />
        <meta
          property="og:image"
          content="https://brewtime.ca/images/logo-prime.webp"
        />
        <meta property="og:url" content="https://brew-time.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brew Time - Freshly Brewed Coffee Anytime"
        />
        <meta
          name="twitter:description"
          content="Enjoy freshly brewed coffee and specialty drinks at Brew Time. Visit us for a delightful coffee experience."
        />
        <meta
          name="twitter:image"
          content="https://brewtime.ca/images/logo-prime.webp"
        />
        <link rel="canonical" href="https://brew-time.vercel.app" />
        <link
          rel="icon"
          type="image/png"
          href="https://brewtime.ca/images/logo-prime.webp"
        />
      </Head>
      {loading ? (
        <div className="  fixed top-0 left-0 right-0 bottom-0 z-50 h-[100vh]  w-full flex flex-col justify-center items-center  p-2 mx-auto m-auto   ">
          <Image
            src="/assets/images/2024-10-01-Brew-Time.gif"
            alt="Loading..."
            width={64}
            height={64}
            className="w-auto  h-auto object-contain object-center"
          />
        </div>
      ) : (
        <div>
          <Nav2 />
          <Component {...pageProps} />
          <ContactFlow />
          <Foot />
          <Footer2 />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default MyApp;
