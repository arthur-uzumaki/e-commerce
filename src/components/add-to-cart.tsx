'use client'
import { useCart } from '@/contexts/cart-context'

interface AddToCartProps {
  productId: number
}
export function AddToCart({ productId }: AddToCartProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      className="bg-emerald-600 rounded-full text-white h-12 mt-8 
  flex justify-center items-center font-semibold transition-colors
   hover:bg-emerald-400 "
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
