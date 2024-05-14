import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid max-h[860px] grid-cols-3 ">
      <div className="col-span-2  overflow-hidden ">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={716}
          height={716}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-500 ">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 font-semibold bg-violet-500 rounded-full">
            R$99
          </span>
          <span className="text-zinc-400 text-sm">
            Em 12x s/ juros de R$8,25
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 "
          >
            P
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 "
          >
            M
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 "
          >
            G
          </button>
          <button
            type="button"
            className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 "
          >
            GG
          </button>
        </div>

        <button
          type="button"
          className="bg-emerald-600 rounded-full text-white h-12 mt-8 flex justify-center items-center font-semibold hover:bg-emerald-400"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
