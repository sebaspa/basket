import { addToCart } from '../features/cart/cartSlice'
import { useAppDispatch } from '../hooks/redux'
import { type TCartItem } from '../types/product'

export const ItemCart = ({ props }: { props: TCartItem }): JSX.Element => {
  const { thumbnail, title, price, quantity } = props
  console.log('props', props)
  const dispatch = useAppDispatch()
  const handleAddToCart = (): void => {
    dispatch(addToCart(props))
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
              >
                <span className="m-auto text-2xl font-thin">-</span>
              </button>
              <p className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none">
                {quantity}
              </p>
              <button
                data-action="increment"
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                onClick={handleAddToCart}
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-5">
          <p className="text-xl font-bold text-right">${price}</p>
        </div>
      </div>
    </div>
  )
}
