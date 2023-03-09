import { Outlet } from 'react-router'
import { Footer, Navbar } from '../components'

export const MainLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
