import { useEffect } from 'react'
import { Product } from '../components'
import { useAppDispatch } from '../hooks/redux'
import { getAllProducts } from '../features/product/productSlice'

export const Products = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await dispatch(getAllProducts(null))
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <Product
          image="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
          title="Samsung Universe 9"
          description="Samsungs new variant which goes beyond Galaxy to the Universe"
          price={1249}
        />
      </div>
    </div>
  )
}
