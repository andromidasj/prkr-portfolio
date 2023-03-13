import { IconArrowDown } from "@tabler/icons-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import MusicSection from "~/components/MusicSection";

const Home: NextPage = () => {
  const musicRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>801 Audio</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex h-[800px] flex-col items-center justify-between gap-12 bg-hero-mixer bg-cover bg-fixed bg-bottom p-40">
        <h1 className="font-white font-logo text-[140px] text-white">
          801 AUDIO
        </h1>

        <h2 className="text-center font-header text-6xl uppercase text-white drop-shadow-sm">
          Where <span className="text-green-300">quality</span> meets
          <span className="text-green-300"> creativity</span>
        </h2>

        <div className="flex gap-8 font-semibold">
          <button
            className="flex w-44 items-center justify-center gap-2 rounded-sm bg-green-300 p-4 px-6 uppercase text-black drop-shadow hover:bg-green-400 active:scale-95"
            onClick={() => musicRef.current?.scrollIntoView()}
          >
            Portfolio <IconArrowDown size={18} />
          </button>
          <Link
            href="/contact"
            className="w-40 rounded-sm bg-slate-50 p-4 px-6 text-center uppercase drop-shadow hover:bg-slate-200 active:scale-95"
          >
            Contact
          </Link>
        </div>
      </div>

      <div ref={musicRef} className="m-auto bg-slate-900 p-16">
        <h1 className="mb-10 text-center font-header text-4xl uppercase text-white">
          Music
        </h1>
        <MusicSection n={4} />
        <br />
        {/* <Portfolio /> */}
      </div>
    </>
  );
};

export default Home;
