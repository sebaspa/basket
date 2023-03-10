import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { addToCart } from '../features/cart/cartSlice'
import { type TProduct } from '../types/product'
import { spinner } from '../assets/images'
import { type RootState } from '../store'

export const Product = ({
  id,
  thumbnail,
  title,
  description,
  price
}: TProduct): JSX.Element => {
  const dispatch = useAppDispatch()
  const handleAddToCart = ({
    id,
    thumbnail,
    title,
    description,
    price
  }: TProduct): void => {
    dispatch(addToCart({ id, thumbnail, title, description, price }))
  }
  const { user } = useSelector((store: RootState) => store.user)
  return (
    <div className="border border-gray-600 h-full">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="relative h-36 w-full">
            <div className="w-full h-full absolute flex justify-center items-center z-0">
              <img src={spinner} alt="spinner" className="w-16 h-16 mx-auto" />
            </div>
            <img
              src={thumbnail}
              alt={title}
              className="h-36 w-full object-cover mb-2 relative z-10"
            />
          </div>
          <div className="px-2 mb-2">
            <div>
              <p className="uppercase text-xl font-medium">{title}</p>
              <p className="text-base mb-2">{description}</p>
              <p className="text-xl font-bold">${price}</p>
            </div>
          </div>
        </div>
        <div className="px-2 mb-2">
          <div className="flex gap-4">
            <button
              onClick={() => {
                handleAddToCart({ id, thumbnail, title, description, price })
              }}
              type="button"
              className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white text-center"
            >
              Add to basket
            </button>
            {user !== null && (
              <Link
                to={`/product/${id}`}
                className="border border-green-600 py-1 px-4 rounded-md mt-4 text-green-600 w-full hover:bg-green-600 hover:text-white text-center"
              >
                View
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
