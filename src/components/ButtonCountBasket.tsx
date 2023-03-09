import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { type RootState } from '../store'

export const ButtonCountBasket = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const getTotalQuantity = (): number => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <Link to="/cart" type="button" className="block ml-auto border border-blue-600 w-fit my-10 py-1 px-4 rounded-md">
      <p className="text-base text-blue-600">Your Basket ({getTotalQuantity()} items)</p>
    </Link>
  )
}
