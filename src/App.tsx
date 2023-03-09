import { Route, Routes } from 'react-router'
import { MainLayout } from './layouts'
import { ListProducts, ShoppingCart } from './pages'

export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ListProducts />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  )
}
