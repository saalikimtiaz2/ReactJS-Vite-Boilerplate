// import { AuthContext } from 'context/AuthContext'
// import { useContext } from 'react'
// import { Navigate, Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export { PrivateRoute }

function PrivateRoute() {
  // const { isAuthenticated } = useContext(AuthContext)

  // if (!isAuthenticated) {
  //   return <Navigate to='/login' replace />
  // }
  return <Outlet />
}
export default PrivateRoute
