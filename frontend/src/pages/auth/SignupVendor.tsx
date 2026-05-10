import { Link } from 'react-router-dom'

const inputCls = 'w-full px-4 py-3 rounded-lg bg-surface-container-low border-none outline-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline'
const labelCls = 'block text-sm font-bold text-on-surface-variant mb-2'

export default function SignupVendor() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">Vendor Sign Up</h1>
          <p className="text-on-surface-variant mt-1">List your restaurant on Culinary Gallery</p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10 space-y-5">
          <div>
            <label className={labelCls}>Restaurant Name</label>
            <input type="text" placeholder="Le Petit Bistro" className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Owner First Name</label>
              <input type="text" placeholder="Jane" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Owner Last Name</label>
              <input type="text" placeholder="Smith" className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Business Email</label>
            <input type="email" placeholder="hello@restaurant.com" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Restaurant Address</label>
            <input type="text" placeholder="123 Main St, City, State" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Password</label>
            <input type="password" placeholder="••••••••" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Confirm Password</label>
            <input type="password" placeholder="••••••••" className={inputCls} />
          </div>
          <button className="w-full py-3 rounded-full bg-linear-to-br from-primary to-primary-fixed text-on-primary font-bold shadow-md active:scale-95 transition-all">
            Create Vendor Account
          </button>
        </div>

        <p className="text-center text-sm text-on-surface-variant">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-primary hover:underline">Sign in</Link>
          {' · '}
          <Link to="/signup" className="font-semibold text-on-surface-variant hover:underline">Go back</Link>
        </p>
      </div>
    </div>
  )
}
