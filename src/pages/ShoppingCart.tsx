export const ShoppingCart = (): JSX.Element => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="ml-auto border border-blue-600 w-fit my-10 py-1 px-4 rounded-md">
          <p className="text-base text-blue-600">Your Basket (2 items)</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border border-gray-600">
              <img
                src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
                alt="product"
              />
              <div className="px-2 mb-2">
                <p className="uppercase text-xl font-medium">Samsung Universe 9</p>
                <p className="text-base mb-2">
                  Samsungs new variant which goes beyond Galaxy to the Universe
                </p>
                <p className="text-xl font-bold">$1249</p>
                <button type="button" className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white">Add to basket</button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border border-gray-600">
              <img
                src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
                alt="product"
              />
              <div className="px-2 mb-2">
                <p className="uppercase text-xl font-medium">Samsung Universe 9</p>
                <p className="text-base mb-2">
                  Samsungs new variant which goes beyond Galaxy to the Universe
                </p>
                <p className="text-xl font-bold">$1249</p>
                <button type="button" className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white">Add to basket</button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border border-gray-600">
              <img
                src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
                alt="product"
              />
              <div className="px-2 mb-2">
                <p className="uppercase text-xl font-medium">Samsung Universe 9</p>
                <p className="text-base mb-2">
                  Samsungs new variant which goes beyond Galaxy to the Universe
                </p>
                <p className="text-xl font-bold">$1249</p>
                <button type="button" className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white">Add to basket</button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border border-gray-600">
              <img
                src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
                alt="product"
              />
              <div className="px-2 mb-2">
                <p className="uppercase text-xl font-medium">Samsung Universe 9</p>
                <p className="text-base mb-2">
                  Samsungs new variant which goes beyond Galaxy to the Universe
                </p>
                <p className="text-xl font-bold">$1249</p>
                <button type="button" className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white">Add to basket</button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border border-gray-600">
              <img
                src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
                alt="product"
              />
              <div className="px-2 mb-2">
                <p className="uppercase text-xl font-medium">Samsung Universe 9</p>
                <p className="text-base mb-2">
                  Samsungs new variant which goes beyond Galaxy to the Universe
                </p>
                <p className="text-xl font-bold">$1249</p>
                <button type="button" className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white">Add to basket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
