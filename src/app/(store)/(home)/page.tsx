import { Product } from '@/data/@types/products'
import { api } from '@/data/api'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Cache & memoization
 *
 */

async function getFeaturedProducts(): Promise<Product[]> {
  const revalidateOneHour = 60 * 60
  const response = await api('/products/featured', {
    next: {
      revalidate: revalidateOneHour,
    },
  })
  const products = await response.json()
  return products
}
export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6 ">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 flex  items-end justify-center row-span-6 rounded-lg bg-zinc-900 overflow-hidden "
      >
        <Image
          src={`${highlightedProduct.image}`}
          width={920}
          height={920}
          alt=""
          quality={100}
          className=" group-hover:scale-105 transition-transform duration-500 "
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 ">
          <span className="text-sm truncate ">{highlightedProduct.title}</span>
          <span className="bg-violet-500 flex items-center  h-full rounded-full justify-center px-4 text-center font-semibold ">
            {highlightedProduct.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="relative group col-span-3 row-span-3 flex  items-end justify-center bg-zinc-900 rounded-lg overflow-hidden"
          >
            <Image
              src={product.image}
              width={920}
              height={920}
              alt=""
              quality={100}
              className=" group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-10  right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 pl-5 ">
              <span className="text-sm truncate ">{product.title}</span>
              <span className="bg-violet-500 flex items-center  h-full rounded-full justify-center px-4 text-center font-semibold ">
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
  )
}
