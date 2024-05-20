import Image from 'next/image'
import Link from 'next/link'
export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        {' '}
        Resultado para: <span className="font-semibold">moletom</span>
      </p>
      <div className="grid grid-cols-3 gap-6 ">
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="relative group  flex items-end justify-center
             bg-zinc-900 rounded-lg overflow-hidden"
        >
          <Image
            src="/camiseta-dowhile-2022.png"
            width={480}
            height={480}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div
            className="absolute bottom-16  right-10 h-12 flex items-center
             gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 "
          >
            <span className="text-sm truncate ">Camiseta dowhile</span>
            <span
              className="bg-violet-500 flex items-center  h-full 
              rounded-full justify-center px-4 text-center font-semibold "
            >
              {Number(200).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="relative group  flex items-end justify-center
             bg-zinc-900 rounded-lg overflow-hidden"
        >
          <Image
            src="/camiseta-dowhile-2022.png"
            width={480}
            height={480}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div
            className="absolute bottom-16  right-10 h-12 flex items-center
             gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 "
          >
            <span className="text-sm truncate ">Camiseta dowhile</span>
            <span
              className="bg-violet-500 flex items-center  h-full 
              rounded-full justify-center px-4 text-center font-semibold "
            >
              {Number(200).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="relative group  flex items-end justify-center
             bg-zinc-900 rounded-lg overflow-hidden"
        >
          <Image
            src="/camiseta-dowhile-2022.png"
            width={480}
            height={480}
            quality={100}
            alt=""
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div
            className="absolute bottom-16  right-10 h-12 flex items-center
             gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 "
          >
            <span className="text-sm truncate ">Camiseta dowhile</span>
            <span
              className="bg-violet-500 flex items-center  h-full 
              rounded-full justify-center px-4 text-center font-semibold "
            >
              {Number(200).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
