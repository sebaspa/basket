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
