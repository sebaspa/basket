import { type TProduct } from '../types/product'

export const Product = ({
  id,
  thumbnail,
  title,
  description,
  price
}: TProduct): JSX.Element => {
  return (
    <div className="border border-gray-600 h-full">
      <div className="h-full flex flex-col justify-between">
        <div>
          <img
            src={thumbnail}
            alt={title}
            className="h-36 w-full object-cover mb-2"
          />
          <div className="px-2 mb-2">
            <div>
              <p className="uppercase text-xl font-medium">{title}</p>
              <p className="text-base mb-2">{description}</p>
              <p className="text-xl font-bold">${price}</p>
            </div>
          </div>
        </div>
        <div className="px-2 mb-2">
          <button
            type="button"
            className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white"
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  )
}
