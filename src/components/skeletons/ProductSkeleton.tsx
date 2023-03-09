export const ProductSkeleton = (): JSX.Element => {
  return (
    <div className="border border-gray-600 h-full">
      <div className="h-36 w-full mb-2 bg-gray-300 animate-pulse"></div>
      <div className="px-2">
      <div className="h-5 w-32 bg-gray-300 mb-3 animate-pulse"></div>
      <div className="h-5 w-full mb-2 bg-gray-300 animate-pulse"></div>
      <div className="h-5 w-1/2 mb-4 bg-gray-300 animate-pulse"></div>
      <div className="h-9 w-full mb-4 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
    </div>
  )
}
