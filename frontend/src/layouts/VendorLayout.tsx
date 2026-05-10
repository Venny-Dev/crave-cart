import { Outlet } from 'react-router-dom'
import VendorSidebar from '../components/vendor/VendorSidebar'

export default function VendorLayout() {
  return (
    <div className="flex min-h-screen text-on-surface">
      <VendorSidebar />
      <main className="ml-64 flex-1 flex flex-col min-h-screen bg-surface">
        <Outlet />
      </main>
    </div>
  )
}
