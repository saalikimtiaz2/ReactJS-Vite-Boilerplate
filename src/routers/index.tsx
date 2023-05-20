import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
// ------------not found page---------------------
const NotFound404 = lazy(() => import('../pages/404'))

function Routers() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className='flex h-screen w-screen items-center justify-center bg-black text-white'>Loading...</div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* ----------404 Page----------------- */}
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routers
