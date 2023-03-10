import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks/redux'
import { ButtonCountBasket, Products } from '../components'
import { getAllProducts } from '../features/product/productSlice'

import { type RootState } from '../store'

export const ListProducts = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await dispatch(getAllProducts(null))
    }
    fetchData().catch(console.error)
  }, [])

  const { isLoading, products } = useSelector(
    (store: RootState) => store.product
  )

  return (
    <>
      <div className="container mx-auto px-4">
        <ButtonCountBasket />
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <Products isLoading={isLoading} products={products} />
      </div>
    </>
  )
}
