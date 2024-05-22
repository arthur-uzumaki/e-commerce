import data from '@/app/api/products/data.json'
import { z } from 'zod'
import type { NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
