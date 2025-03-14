import Image from "next/image";
import { songs } from "~/musicData";
import AudioPlayer from "./AudioPlayer";

export default function MusicSection({ n }: { n?: number }) {
  return (
    <div className="grid w-full gap-8 md:grid-cols-1 lg:mx-0 lg:grid-cols-2">
      {songs.slice(n).map(({ title, artist, involvement, path }) => (
        <div
          key={title}
          className="flex w-full flex-col overflow-clip rounded-sm text-slate-900 transition-transform sm:h-40 sm:flex-row sm:hover:scale-[101%]"
        >
          <Image
            src={path + ".jpg"}
            alt={`${title} by ${artist}`}
            className="w-full sm:h-40 sm:w-40"
            height={180}
            width={180}
            priority
          />

          <div className="relative flex w-full flex-col justify-between bg-[#F1F3F4] p-4">
            <div className="flex flex-col gap-2 text-center sm:text-start">
              <h3 className="text-lg font-bold">
                {title} • {artist}
              </h3>
              <div className="flex justify-center gap-2 text-slate-700 sm:justify-start">
                {involvement.join(" • ")}
              </div>
            </div>
            <AudioPlayer path={path} />
          </div>
        </div>
      ))}
    </div>
  );
}
