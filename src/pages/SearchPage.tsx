import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ButtonCountBasket, Products } from '../components'
import { type RootState } from '../store'

export const SearchPage = (): JSX.Element => {
  const { products } = useSelector((store: RootState) => store.product)
  const [productsToFilter, setProductsToFilter] = useState(products)

  const filterProductsByName = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const searchText = e.target.value
    if (searchText === '') {
      setProductsToFilter(products)
    } else {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
      setProductsToFilter(filteredProducts)
    }
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center my-8">
          Search Page
        </h2>
        <div className="mt-6 mb-8">
          <label htmlFor="search">Search by product name</label>
          <input
            id="search"
            type="search"
            className="w-full border border-gray-500 rounded-md h-9 px-3"
            onChange={(e) => {
              filterProductsByName(e)
            }}
          />
        </div>
        <ButtonCountBasket />
        <Products isLoading={false} products={productsToFilter} />
      </div>
    </>
  )
}
