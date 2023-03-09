import { useEffect } from 'react'
import { ButtonCountBasket, Products } from '../components'
import { useAppDispatch } from '../hooks/redux'
import { getAllProducts } from '../features/product/productSlice'

export const ShoppingCart = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await dispatch(getAllProducts(null))
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <>
      <div className="container mx-auto px-4">
        <ButtonCountBasket />
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <Products />
      </div>
    </>
  )
}
