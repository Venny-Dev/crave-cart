import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div className="min-h-screen flex flex-col text-on-surface">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm shadow-orange-900/5 px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-extrabold text-on-surface tracking-tight font-headline">
          Culinary Gallery
        </span>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container p-2 rounded-full transition-colors">
          help_outline
        </span>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-stretch pt-[72px]">
        {/* Left: Editorial Image */}
        <section className="hidden lg:flex w-1/2 relative overflow-hidden bg-surface-container-high">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6trpGrQoKhezHnxxA-OVN3rHHUgZeL9LbmIhi5ASOXmtAI1vTNnJozBzZmkKVtirFKvkXGLh5TfDOAv8Ts7XQsKQmyF38qMlz2DMFWehygOM5tOb6CQyOLNdqgSdSUXL0mx-WX-K_sboRHb2WGpKwEToDWXjj52UWfq3yT6X2y-36RkcsrDddRdv70H8lXDPYCeoXZ_sXSPjc6wnuI4V0sXPcjjyfbm3nPUXbLHU1ZFCfm0tML76okAdeZmKZYNgwYEGSOCrmUcrY"
            alt="Gourmet presentation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent" />
          <div className="relative z-10 p-16 mt-auto">
            <div className="bg-white/60 backdrop-blur-xl px-6 py-4 rounded-xl mb-6 inline-block">
              <p className="text-on-surface font-headline font-bold text-xl tracking-tight">
                The Gastronomic Gallery
              </p>
            </div>
            <h1 className="text-5xl font-extrabold text-white font-headline leading-tight mb-4">
              Elevate your <br /> culinary journey.
            </h1>
            <p className="text-stone-200 text-lg max-w-md">
              Whether you're exploring flavors or serving them, we curate the best for every palate.
            </p>
          </div>
        </section>

        {/* Right: Form */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-surface">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">
                Welcome back
              </h2>
              <p className="text-on-surface-variant">Sign in to your curated space.</p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="chef@curated.com"
                    className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center ml-2">
                    <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Password
                    </label>
                    <a href="#" className="text-xs font-semibold text-primary hover:underline underline-offset-4 transition-all">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-br from-primary to-primary-fixed text-on-primary py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all duration-200"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-4">
              <div className="grow border-t border-outline-variant/30" />
              <span className="shrink mx-4 text-xs font-bold uppercase tracking-widest text-outline">
                Or continue with
              </span>
              <div className="grow border-t border-outline-variant/30" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-low rounded-full hover:bg-surface-container-highest transition-colors active:scale-95">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-semibold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-low rounded-full hover:bg-surface-container-highest transition-colors active:scale-95">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.96.95-2.04 1.43-3.24 1.43-1.16 0-2.15-.43-2.98-1.28-.85-.88-1.95-1.32-3.29-1.32s-2.44.44-3.29 1.32c-.83.85-1.82 1.28-2.98 1.28-1.2 0-2.28-.48-3.24-1.43-1.33-1.31-1.99-2.92-1.99-4.83 0-1.91.66-3.52 1.99-4.83.96-.95 2.04-1.43 3.24-1.43 1.16 0 2.15.43 2.98 1.28.85.88 1.95 1.32 3.29 1.32s2.44-.44 3.29-1.32c.83-.85 1.82-1.28 2.98-1.28 1.2 0 2.28.48 3.24 1.43 1.33 1.31 1.99 2.92 1.99 4.83 0 1.91-.66 3.52-1.99 4.83z" />
                </svg>
                <span className="text-sm font-semibold">Apple</span>
              </button>
            </div>

            <p className="text-center text-on-surface-variant">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary font-bold hover:underline underline-offset-4 decoration-primary/30 transition-all">
                Join the Gallery
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low py-8 flex flex-col items-center space-y-4">
        <div className="text-lg font-bold text-on-surface font-headline">Culinary Gallery</div>
        <div className="flex gap-6 text-sm text-on-surface-variant">
          <a href="#" className="hover:text-on-surface underline decoration-primary/30 underline-offset-4">Privacy Policy</a>
          <a href="#" className="hover:text-on-surface underline decoration-primary/30 underline-offset-4">Terms of Service</a>
          <a href="#" className="hover:text-on-surface underline decoration-primary/30 underline-offset-4">Help Center</a>
        </div>
        <p className="text-on-surface-variant text-xs">© 2024 Culinary Gallery. The Gastronomic Gallery.</p>
      </footer>
    </div>
  )
}
