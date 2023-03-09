import { useEffect } from 'react'
import { Products } from '../components'
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
        <div className="ml-auto border border-blue-600 w-fit my-10 py-1 px-4 rounded-md">
          <p className="text-base text-blue-600">Your Basket (2 items)</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <Products />
      </div>
    </>
  )
}
