'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(productId)}
      type="button"
      className="mt-8 flex justify-center items-center rounded-full h-12 bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
