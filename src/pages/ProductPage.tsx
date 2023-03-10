import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useAppDispatch } from '../hooks/redux'
import { getProduct } from '../features/product/productSlice'
import { spinner } from '../assets/images'
import { type RootState } from '../store'
import { type TSingleProduct } from '../types/product'
import { ProductDetailSkeleton } from '../components/skeletons'

export const ProductPage = (): JSX.Element => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const [product, setProduct] = useState<TSingleProduct | null>(null)
  const { isLoading } = useSelector((store: RootState) => store.product)
  const id = params.id
  if (id !== undefined) {
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        const productData = await dispatch(getProduct(id))
        setProduct(productData.payload)
      }
      fetchData().catch(console.error)
    }, [])
  }

  return (
    <div className="container mx-auto px-4 mb-6">
      <h2 className="text-center text-xl md:text-2xl font-bold text-black mt-5 mb-6">
        Product detail
      </h2>
      {isLoading && (
        <>
          <ProductDetailSkeleton />
        </>
      )}
      {!isLoading && (
        <>
          <div className="grid grid-cols-12 gap-5 mb-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="relative w-full h-64">
                <div className="w-full h-full absolute flex justify-center items-center z-0">
                  <img
                    src={spinner}
                    alt="spinner"
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="w-full object-cover rounded-md relative h-64 z-10"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <p className="text-lg font-bold mb-1">{product?.title}</p>
              <p>
                <b>Description:</b> {product?.description}
              </p>
              <p>
                <b>Category:</b> {product?.category}
              </p>
              <p>
                <b>Stock:</b> {product?.stock} units.
              </p>
              <p>
                <b>Price:</b> ${product?.price}
              </p>
              <p>
                <b>Discount Percentage:</b> {product?.discountPercentage}%
              </p>
            </div>
          </div>
        </>
      )}
      <Link
        to="/"
        className="text-xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Back to products
      </Link>
    </div>
  )
}
