import { Product } from '../components'

export const Products = (): JSX.Element => {
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
