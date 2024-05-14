import { Product } from '@/data/@types/products'
import { api } from '@/data/api'
import Image from 'next/image'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const revalidateOneHour = 60 * 60
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: revalidateOneHour,
    },
  })
  const product = await response.json()
  return product
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <div className="relative grid max-h[860px] grid-cols-3 ">
      <div className="col-span-2  overflow-hidden ">
        <Image
          src={product.image}
          alt=""
          width={716}
          height={716}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-500 ">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 font-semibold bg-violet-500 rounded-full">
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="text-zinc-400 text-sm">
            Em 12x s/ juros de{' '}
            {(product.price / 12).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
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
