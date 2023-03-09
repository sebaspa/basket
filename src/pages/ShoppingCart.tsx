import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ItemCart } from '../components'
import { type RootState } from '../store'

export const ShoppingCart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold my-6">
          Shopping Cart
        </h2>
        <div className="my-5">
          {cart.map(item => {
            return (
              <ItemCart key={item.id} props={item} />
            )
          })}
        </div>
        <div className="rounded-2xl bg-gray-300 w-full p-4">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Total</p>
            <p className="text-xl">$10.000</p>
          </div>
        </div>
        <div className="flex gap-4 mt-6 mb-5 items-center">
          <button className="px-6 py-2 bg-purple-500 text-white hover:bg-purple-600 rounded-lg">Checkout</button>
          <Link to="/" className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg">Continue shopping</Link>
        </div>
      </div>
    </>
  )
}
