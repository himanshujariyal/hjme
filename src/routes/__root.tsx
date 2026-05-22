import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Loader from '../components/Loader'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Loader />
      <div className="mx-auto max-w-[1170px] bg-white box-border">
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
})
