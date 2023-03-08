import { Route, Routes } from 'react-router'
import { ShoppingCart } from './pages'

export const App = (): JSX.Element => {
  return (
    <>
    <Routes>
      <Route path="/" element={<ShoppingCart />}></Route>
    </Routes>
    </>
  )
}
