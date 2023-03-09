import { Route, Routes } from 'react-router'
import { ListProducts, ShoppingCart } from './pages'

export const App = (): JSX.Element => {
  return (
    <>
    <Routes>
      <Route path="/" element={<ListProducts />}></Route>
      <Route path="/cart" element={<ShoppingCart />}></Route>
    </Routes>
    </>
  )
}
