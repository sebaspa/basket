import { Product } from '../components'

export const Products = (): JSX.Element => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <Product />
      </div>
    </div>
  )
}
