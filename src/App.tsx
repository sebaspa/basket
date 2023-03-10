import { Route, Routes } from 'react-router'
import { MainLayout } from './layouts'
import { ListProducts, SearchPage, ShoppingCart, ProductPage, ProtectedRoute } from './pages'

export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ListProducts />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route path='/search' element={<SearchPage />}></Route>
            <Route path='/product/:id' element={<ProductPage />}></Route>
          </Route>
      </Routes>
    </>
  )
}
