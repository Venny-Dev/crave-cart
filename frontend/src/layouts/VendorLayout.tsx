import { Outlet } from 'react-router-dom'
import VendorSidebar from '../components/vendor/VendorSidebar'

export default function VendorLayout() {
  return (
    <div className="flex min-h-screen text-on-surface">
      <VendorSidebar />
      {/* On mobile: pt-14 to clear the top bar. On desktop: ml-64 for the sidebar. */}
      <main className="flex-1 flex flex-col min-h-screen bg-surface pt-14 lg:pt-0 lg:ml-64">
        <Outlet />
      </main>
    </div>
  )
}
