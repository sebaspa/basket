import { Link } from 'react-router-dom'

export const ShoppingCart = (): JSX.Element => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold my-6">
          Shopping Cart
        </h2>
        <div className="my-5">
          <div className="py-6 border-t border-gray-400">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="flex gap-3 col-span-12 md:col-span-6">
                <img
                  src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                  alt="product"
                  className="w-28 h-28 object-cover rounded-xl"
                />
                <div>
                  <p className="text-xl font-bold mb-2">Product name</p>
                  <p className="text-base">Samsung galaxy universe 10</p>
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
                    <input
                      type="number"
                      className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                      name="custom-input-number"
                      min="0"
                    ></input>
                    <button
                      data-action="increment"
                      className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 lg:col-span-5">
                <p className="text-xl font-bold text-center">$12.122</p>
              </div>
            </div>
          </div>
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
