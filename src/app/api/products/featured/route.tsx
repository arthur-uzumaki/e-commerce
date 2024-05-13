import data from '@/app/api/products/data.json'
export async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured)
  return Response.json(featuredProducts)
}
