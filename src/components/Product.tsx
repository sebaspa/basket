export const Product = (): JSX.Element => {
  return (
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
        <button
          type="button"
          className="border border-blue-600 py-1 px-4 rounded-md mt-4 text-blue-600 w-full hover:bg-blue-600 hover:text-white"
        >
          Add to basket
        </button>
      </div>
    </div>
  )
}
