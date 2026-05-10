import { Link } from 'react-router-dom'

export default function Signup() {
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
              Your culinary <br /> journey begins here.
            </h1>
            <p className="text-stone-200 text-lg max-w-md">
              Choose your path and discover the world's finest flavors.
            </p>
          </div>
        </section>

        {/* Right: Role Selection */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-surface">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">
                Join the Gallery
              </h2>
              <p className="text-on-surface-variant">Choose how you'd like to get started.</p>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              {/* Customer Card */}
              <Link
                to="/signup/customer"
                className="group flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all duration-200 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <span className="material-symbols-outlined text-primary">restaurant</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-on-surface text-lg">Join as a Customer</p>
                  <p className="text-on-surface-variant text-sm mt-0.5">
                    Order from curated kitchens and track your delivery.
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </Link>

              {/* Vendor Card */}
              <Link
                to="/signup/vendor"
                className="group flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all duration-200 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-on-surface text-lg">Become a Partner</p>
                  <p className="text-on-surface-variant text-sm mt-0.5">
                    Manage your restaurant and grow your culinary business.
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </Link>
            </div>

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
