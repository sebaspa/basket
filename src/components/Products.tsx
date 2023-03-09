import { Product } from '../components'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import { type TProduct } from '../types/product'

export const Products = (): JSX.Element => {
  const { products } = useSelector((store: RootState) => store.product)
  return (
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
  )
}
