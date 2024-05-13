import Image from 'next/image'
import Link from 'next/link'
export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="relative group col-span-6 row-span-6 flex justify-center items-end bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src="/moletom.png"
          width={920}
          height={920}
          alt=""
          quality={100}
          className=" group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 ">
          <span className="text-sm truncate ">Moletom Never</span>
          <span className="bg-violet-500 flex items-center  h-full rounded-full justify-center px-4 text-center font-semibold ">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative group col-span-3 row-span-3 flex justify-center items-end bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src="/moletom-java.png"
          width={920}
          height={920}
          alt=""
          quality={100}
          className=" group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 ">
          <span className="text-sm truncate ">Moletom Never</span>
          <span className="bg-violet-500 flex items-center  h-full rounded-full justify-center px-4 text-center font-semibold ">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className=" relative group col-span-3 row-span-3 flex justify-center items-end bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          width={920}
          height={920}
          alt=""
          quality={100}
          className=" group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 ">
          <span className="text-sm truncate ">Moletom Never Stop Learning</span>
          <span className="bg-violet-500 flex items-center  h-full rounded-full justify-center px-4 text-center font-semibold ">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
