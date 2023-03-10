export interface TProduct {
  id: number
  thumbnail: string
  title: string
  description: string
  price: number
}

export interface TCartItem extends TProduct {
  quantity: number
}

export interface TSingleProduct {
  brand: string
  category: sting
  description: sting
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}
