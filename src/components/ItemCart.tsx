import { useAppDispatch } from '../hooks/redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem
} from '../features/cart/cartSlice'

import { type TCartItem } from '../types/product'

export const ItemCart = ({ props }: { props: TCartItem }): JSX.Element => {
  const { id, thumbnail, title, price, quantity } = props
  const dispatch = useAppDispatch()

  const handleIncrementQuantity = (): void => {
    dispatch(incrementQuantity(id))
  }
  const handleDecrementQuantity = (): void => {
    dispatch(decrementQuantity(id))
  }
  const handleRemoveItem = (): void => {
    dispatch(removeItem(id))
  }
  return (
    <div className="py-6 border-t border-gray-400">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="flex gap-3 col-span-12 md:col-span-6">
          <img
            src={thumbnail}
            alt="product"
            className="w-28 h-28 object-cover rounded-xl"
          />
          <div>
            <p className="text-xl font-bold mb-2">Product name</p>
            <p className="text-base">{title}</p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <button
                data-action="decrement"
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                onClick={handleDecrementQuantity}
              >
                <span className="m-auto text-2xl font-thin">-</span>
              </button>
              <p className="bg-gray-300 text-gray-800 px-1 pt-2 font-bold w-16 text-center">
                {quantity}
              </p>
              <button
                data-action="increment"
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                onClick={handleIncrementQuantity}
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="px-4 py-1 bg-red-500 text-white hover:bg-red-600 rounded-lg mt-2"
            onClick={handleRemoveItem}
          >
            Remove
          </button>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-5">
          <p className="text-xl font-bold text-right">${price}</p>
        </div>
      </div>
    </div>
  )
}
