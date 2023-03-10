export const ProductDetailSkeleton = (): JSX.Element => {
  return (
    <div className="grid grid-cols-12 gap-5 mb-10">
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="w-full h-64 bg-gray-300 mb-3 animate-pulse"></div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-8">
      <div className="h-5 w-1/3 mb-4 bg-gray-300 animate-pulse"></div>
      <div className="h-5 w-1/2 mb-4 bg-gray-300 animate-pulse"></div>
      <div className="h-5 w-3/4 mb-4 bg-gray-300 animate-pulse"></div>
      <div className="h-5 w-1/2 mb-4 bg-gray-300 animate-pulse"></div>
      <div className="h-5 w-3/4 mb-4 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  )
}
