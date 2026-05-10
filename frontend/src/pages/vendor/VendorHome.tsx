export default function VendorHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar — hidden on mobile (replaced by sidebar's top bar) */}
      <header className="hidden lg:flex sticky top-0 z-40 bg-surface/80 backdrop-blur-xl shadow-sm shadow-orange-900/5 justify-between items-center px-6 py-4">
        <span className="text-2xl font-extrabold text-primary tracking-tight font-headline">
          The Gastronomic Gallery
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 text-primary rounded-full text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Online
          </div>
          <div className="flex items-center gap-3 text-zinc-500">
            <button className="material-symbols-outlined hover:bg-orange-50 p-2 rounded-full transition-colors">
              notifications
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjHCntviPTxC6lf0IUZUpzEG9uIgfviGGPtEdDUfhT_DC9Dscx6BFX_WXfFSeBWxfLINRO-8pHc7SpiqCqiCMjf0H8BfYD-2IrBzan7L_nhU1zwAF3LEHYp1CJBwvqa_D7RZmJkGg42J77Hco3MH-oheIPaslEJqJQw0g0_Cf2VZZ9Ks1_e2aM7HQ6ldGS9B0zKdXrncdlApQKKxUN7h6DyxhuZTMyC_MvU9Sprq29eOFRmXo03G9EczC1P6xFXN24kAyG2kmkttkc"
                alt="Vendor avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 md:p-8 space-y-8 flex-1">
        {/* Welcome */}
        <section className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">
              Welcome back, Chef
            </h2>
            <p className="text-on-surface-variant mt-1">
              Here is what's happening at your bistro today.
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Live Updates</p>
            <p className="text-sm font-medium text-on-surface-variant">Last synced: Just now</p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: 'shopping_bag', label: 'Total Orders', value: '24', badge: '+12%', badgeColor: 'text-emerald-600' },
            { icon: 'payments', label: 'Total Revenue', value: '₦142,500', badge: '+8%', badgeColor: 'text-emerald-600' },
            { icon: 'analytics', label: 'Avg Order Value', value: '₦5,900', badge: 'Stable', badgeColor: 'text-on-surface-variant' },
            { icon: 'block', label: 'Rejected Orders', value: '1', badge: '-2', badgeColor: 'text-error', iconColor: 'text-error bg-red-50' },
          ].map(({ icon, label, value, badge, badgeColor, iconColor }) => (
            <div
              key={label}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`material-symbols-outlined p-2 rounded-lg ${iconColor ?? 'text-primary bg-orange-50'}`}>
                  {icon}
                </span>
                <span className={`text-xs font-bold ${badgeColor}`}>{badge}</span>
              </div>
              <p className="text-on-surface-variant text-sm font-medium">{label}</p>
              <h3 className="text-3xl font-extrabold text-on-surface mt-1 font-headline">{value}</h3>
            </div>
          ))}
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Chart + Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chart */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold font-headline">Orders Today</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-medium">Hourly</span>
                  <span className="px-3 py-1 text-on-surface-variant text-xs font-medium">Weekly</span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-4">
                {[
                  { time: '08:00', h: 'h-12', bg: 'bg-orange-100 group-hover:bg-primary/40' },
                  { time: '10:00', h: 'h-24', bg: 'bg-orange-100 group-hover:bg-primary/40' },
                  { time: '12:00', h: 'h-48', bg: 'bg-orange-200 group-hover:bg-primary/60' },
                  { time: '14:00', h: 'h-60', bg: 'bg-gradient-to-t from-primary to-primary-fixed shadow-lg shadow-orange-900/10', timeClass: 'font-bold text-primary' },
                  { time: '16:00', h: 'h-32', bg: 'bg-orange-200 group-hover:bg-primary/60' },
                  { time: '18:00', h: 'h-16', bg: 'bg-orange-100 group-hover:bg-primary/40' },
                  { time: '20:00', h: 'h-8', bg: 'bg-orange-50 group-hover:bg-primary/20' },
                ].map(({ time, h, bg, timeClass }) => (
                  <div key={time} className="flex flex-col items-center flex-1 group">
                    <div className={`w-full rounded-t-lg transition-all duration-300 ${h} ${bg}`} />
                    <span className={`text-[10px] text-on-surface-variant mt-2 ${timeClass ?? ''}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline px-1">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: 'add_circle', label: 'Add Menu Item' },
                  { icon: 'visibility', label: "Today's Orders" },
                  { icon: 'support_agent', label: 'Contact Support' },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    className="flex flex-col items-center justify-center p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:bg-orange-50 transition-colors active:scale-95 duration-200"
                  >
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">{icon}</span>
                    <span className="text-sm font-bold">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Activity Feed */}
          <div className="bg-surface-container-low rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold font-headline">Recent Activity</h3>
              <button className="text-xs font-bold text-primary">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { icon: 'check_circle', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', title: 'Order #8422 Delivered', sub: 'Customer: Amara Okafor', time: '2 mins ago' },
                { icon: 'pending', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'New Order Received', sub: 'Order #8430 - ₦12,400', time: '15 mins ago' },
                { icon: 'restaurant', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Menu Item Updated', sub: 'Truffle Pasta price changed', time: '1 hour ago' },
                { icon: 'cancel', iconBg: 'bg-red-100', iconColor: 'text-red-600', title: 'Order Rejected', sub: 'Item out of stock: Lobster Bisque', time: '3 hours ago' },
              ].map(({ icon, iconBg, iconColor, title, sub, time }, i, arr) => (
                <div key={title} className="flex gap-4 relative">
                  {i < arr.length - 1 && (
                    <div className="w-0.5 absolute left-5 top-10 bottom-0 bg-outline-variant/30" />
                  )}
                  <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0 z-10`}>
                    <span className={`material-symbols-outlined text-xl ${iconColor}`}>{icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{title}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{sub}</p>
                    <p className="text-[10px] text-zinc-400 mt-1">{time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Card */}
            <div className="mt-8 bg-zinc-900 rounded-xl p-6 text-white overflow-hidden relative group">
              <div className="relative z-10">
                <p className="text-xs font-bold text-orange-400 mb-2 uppercase tracking-widest">Growth Tip</p>
                <h4 className="text-lg font-bold mb-3">Boost your weekend visibility!</h4>
                <button className="text-xs font-bold py-2 px-4 bg-white text-zinc-900 rounded-full hover:bg-orange-50 transition-colors">
                  Start Campaign
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
                <span
                  className="material-symbols-outlined text-[120px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  campaign
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-outline-variant/10 flex justify-between items-center text-on-surface-variant text-xs">
        <p>© 2024 The Gastronomic Gallery Vendor Portal</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}
