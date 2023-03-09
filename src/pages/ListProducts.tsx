import { ButtonCountBasket, Products } from '../components'

export const ListProducts = (): JSX.Element => {
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
