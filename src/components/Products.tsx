import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks/redux'
import { getAllProducts } from '../features/product/productSlice'
import { Product } from '../components'
import { type RootState } from '../store'
import { type TProduct } from '../types/product'
import { ProductSkeleton } from './skeletons'

export const Products = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { isLoading, products } = useSelector(
    (store: RootState) => store.product
  )

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await dispatch(getAllProducts(null))
    }
    fetchData().catch(console.error)
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-4 mb-5">
        {Array(8)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <ProductSkeleton />
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-5">
        {products.map((product: TProduct) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3"
            key={product.id}
          >
            <Product
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </>
  )
}
