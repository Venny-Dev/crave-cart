import { Link, useLocation, Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/orders', icon: 'receipt_long', label: 'Orders' },
  { to: '/cart', icon: 'shopping_bag', label: 'Cart' },
]

export default function AppLayout() {
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()

  return (
    <div className="text-on-surface">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
        <nav className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-orange-600 text-2xl material-symbols-outlined">restaurant</span>
            <span className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 font-headline">Culinary Gallery</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-semibold transition-colors px-3 py-2 rounded-lg ${
                  pathname === to
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100/50 dark:hover:bg-stone-800/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-stone-100/50 dark:hover:bg-stone-800/50 transition-colors active:scale-95 duration-200"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-on-surface">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-stone-100/50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-stone-900">account_circle</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <Outlet />

      {/* Bottom Navigation Bar (mobile) */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-t border-stone-100 dark:border-stone-800 shadow-[0_-12px_24px_rgba(88,37,0,0.06)] rounded-t-xl z-50 flex justify-around items-center px-4 pt-2 pb-6 md:hidden">
        {navItems.map(({ to, icon, label }) => {
          const active = pathname === to
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center rounded-full px-5 py-2 active:scale-90 transition-transform duration-200 ${
                active
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                  : 'text-stone-500 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-300'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
              >
                {icon}
              </span>
              <span className="text-[11px] font-semibold">{label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
