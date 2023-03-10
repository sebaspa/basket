import { Link } from 'react-router-dom'

export const Error = (): JSX.Element => {
  return (
    <div className="container mx-auto px-4 text-center mb-9">
      <h3 className="text-xl md:text-4xl font-bold mb-5">
        Ohh! Page not found
      </h3>
      <p className="mb-6">
        We can&apos;t seem to find the page you&apos;re looking for
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
      >
        Back home
      </Link>
    </div>
  )
}
