import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Loader from '../components/Loader'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectHeader from '../components/ProjectHeader'

function RootLayout() {
  const { location } = useRouterState()
  const isProjectDetail = location.pathname.startsWith('/works/')

  return (
    <>
      <Loader />
      <div className="mx-auto max-w-[1170px] bg-white box-border">
        {isProjectDetail ? (
          <ProjectHeader />
        ) : (
          <>
            <Header />
            <NavBar />
          </>
        )}
        <Outlet />
        <Footer />
      </div>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
