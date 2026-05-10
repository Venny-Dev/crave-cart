import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { to: '/vendor', icon: 'home', label: 'Home' },
  { to: '/vendor/vendor-orders', icon: 'receipt_long', label: 'Orders' },
  { to: '/vendor/menu', icon: 'restaurant_menu', label: 'Menu' },
  { to: '/vendor/settings', icon: 'settings', label: 'Settings' },
]

interface NavContentProps {
  pathname: string
  theme: string
  toggle: () => void
  onClose?: () => void
  showClose?: boolean
}

function NavContent({ pathname, theme, toggle, onClose, showClose }: NavContentProps) {
  return (
    <>
      <div className="px-6 mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-on-surface font-headline mb-1">Le Petit Bistro</h1>
          <p className="text-xs text-on-surface-variant font-medium">Premium Vendor</p>
        </div>
        {showClose && (
          <button
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-1 px-2">
        {navItems.map(({ to, icon, label }) => {
          const active = to === '/vendor' ? pathname === '/vendor' : pathname === to
          return (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                active
                  ? 'bg-surface-container-highest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
              >
                {icon}
              </span>
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 mt-auto">
        <button className="w-full bg-linear-to-br from-primary to-primary-fixed text-on-primary py-3 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform duration-200">
          View Live Store
        </button>
        <div className="mt-4 border-t border-outline-variant/10 pt-4 flex flex-col gap-1">
          <a
            href="#"
            className="text-on-surface-variant flex items-center gap-3 px-4 py-3 rounded-full hover:bg-surface-container transition-all text-sm font-semibold"
          >
            <span className="material-symbols-outlined">help</span>
            Help Center
          </a>
          <button
            onClick={toggle}
            className="text-on-surface-variant flex items-center gap-3 px-4 py-3 rounded-full hover:bg-surface-container transition-all text-sm font-semibold w-full"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </>
  )
}

export default function VendorSidebar() {
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 px-4 py-3 flex items-center justify-between">
        <span className="text-lg font-extrabold text-on-surface font-headline">Le Petit Bistro</span>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Mobile drawer backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-72 z-50 bg-surface-container-low flex flex-col py-8 border-r border-outline-variant/10 transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavContent
          pathname={pathname}
          theme={theme}
          toggle={toggle}
          onClose={() => setOpen(false)}
          showClose
        />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 z-50 bg-surface-container-low flex-col py-8 border-r border-outline-variant/10">
        <NavContent pathname={pathname} theme={theme} toggle={toggle} />
      </aside>
    </>
  )
}
