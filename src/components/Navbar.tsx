import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks/redux'

import { type RootState } from '../store'
import { loginUser, logoutUser } from '../features/user/userSlice'
import { NavLink } from 'react-router-dom'

export const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { user, isLoading } = useSelector((store: RootState) => store.user)

  const handleLogin = async (): Promise<void> => {
    await dispatch(loginUser({ username: 'kminchelle', password: '0lelplR' }))
  }
  const handleLogOut = (): void => {
    dispatch(logoutUser())
  }
  return (
    <>
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-4 justify-between flex-col md:flex-row">
          <div>
            <ul className="flex gap-4" id="mainMenu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search</NavLink>
              </li>
            </ul>
          </div>
          <div>
            {user === null && (
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400 disabled:cursor-not-allowed"
                type="button"
                disabled={isLoading}
                onClick={() => {
                  void handleLogin()
                }}
              >
                Log in
              </button>
            )}
            {user !== null && (
              <div className="flex gap-4">
                <p className="px-4 py-2 bg-blue-600 text-white rounded-lg w-fit">
                  {user?.firstName} {user?.lastName}
                </p>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
