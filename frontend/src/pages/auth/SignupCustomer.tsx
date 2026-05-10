import { Link } from 'react-router-dom'

export default function SignupCustomer() {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgHRpi9CMxPUHfo1WQhCABb5U0xZiwtfc9OXScdWgqkO4vtjZwrXl4aLuWKmseedBRBGWywZmqYvr5rXNtgad6KdClVtyZODvtijMrJSTVFlhdwuoVNYo-r8xusXMMLhyagl9cIdk9ziucWv3Oh27IErE7LHqtpMdUbAlmevAHehH6_26TrZ2-At8zCflEvyfxsPze2s8JhcXYttXXpnJd43hjkv7Y1174VpPpOB0h0qiRuT3gWzNPmSQvB7NULpLJ0EOfKp6jE24e"
            alt="Gourmet food"
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
              Order from the <br /> world's finest kitchens.
            </h1>
            <p className="text-stone-200 text-lg max-w-md">
              Discover curated menus and get them delivered to your door.
            </p>
          </div>
        </section>

        {/* Right: Form */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-surface overflow-y-auto">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <Link to="/signup" className="inline-flex items-center gap-1 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-2">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back
              </Link>
              <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">
                Create account
              </h2>
              <p className="text-on-surface-variant">Start ordering from the best restaurants.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                  />
                </div>
              </div>

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
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="confirmPassword" className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-6 py-4 bg-surface-container-low border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline text-on-surface"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-br from-primary to-primary-fixed text-on-primary py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all duration-200"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-on-surface-variant">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4 decoration-primary/30 transition-all">
                Sign In
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
