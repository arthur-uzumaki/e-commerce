import { Product } from '@/data/@types/products'
import { api } from '@/data/api'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const revalidateOneHour = 60 * 60
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: revalidateOneHour,
    },
  })
  const products = await response.json()
  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        {' '}
        Resultado para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6 ">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="relative group  flex items-end justify-center
             bg-zinc-900 rounded-lg overflow-hidden"
            >
              <Image
                src={product.image}
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
                <span className="text-sm truncate ">{product.title}</span>
                <span
                  className="bg-violet-500 flex items-center  h-full 
              rounded-full justify-center px-4 text-center font-semibold "
                >
                  {product.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
