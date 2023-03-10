import { Product } from '../components'
import { ProductSkeleton } from './skeletons'
import { type TProduct } from '../types/product'

export const Products = (props: {
  isLoading: boolean
  products: TProduct[]
}): JSX.Element => {
  const { isLoading, products } = props
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
