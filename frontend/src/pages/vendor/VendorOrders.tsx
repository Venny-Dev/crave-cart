const newOrders = [
  {
    id: '#2045', customer: 'Sarah', initial: 'S', time: '5m ago', total: '₦8,500',
    items: [
      { qty: '2x', name: 'Margherita Pizza', note: 'Classic Basil, Mozzarella' },
      { qty: '1x', name: 'Coke', note: '500ml Chilled' },
    ],
  },
  {
    id: '#2044', customer: 'Michael', initial: 'M', time: '12m ago', total: '₦12,200',
    items: [],
  },
]

const activeOrders = [
  {
    id: '#2040', name: 'Spicy Pasta Arrabbiata', progress: 75,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ddKyUm37RtD8YzNYF72KK73_XdnnGds1DrF2O6kz_RFoZOue7XCh9l1_KH320wi4Dkmhm-BWywVVXxOpO8CbTY1SF9x0w9tx49HOf8it5Do_2x-MdhUbPWL4GBaU6kSdoSX4qVF2Don6SPeNXH0yghFPwqG_w5YEUTsywyjWIhontvLnInZ8UP4TUkxPfvqpeh_7-U0VRb2GMQFju2Ak5dI6PVEm9cQCNVvzAFNrkIYJm86N1zD2hlbRFY04bOyS5QqEZqHZWU0r',
  },
  {
    id: '#2041', name: 'Grilled Salmon Salad', progress: 40,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1F5voy_WlOowje6fZkcTCZL0JwahEBTkK1wQFwJf7Ykhj7of8c3xyv158hEusa35EgW_ab-ZhY3JyyRq-FfLg7BbuF9ycbkENYJlUMZ-_UfrQm0kGBopCNOTeCznYKde2CyGKhahOMmCxBLn03_t8aHf4FzHGWk3kg3Q4CjB7BIBlPbMScyTVzPtO_EGef9-IkGbeNlvjdsCB7KFYK8XgZNVpl2d8agOWkAxy7SPJTHcIhRghga46ybOgMvrH02PSTcCSSmLRwZnu',
  },
]

export default function VendorOrders() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl shadow-sm shadow-orange-900/5 flex justify-between items-center px-6 py-4">
        <span className="text-2xl font-extrabold text-primary tracking-tight font-headline">
          The Gastronomic Gallery
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 text-primary rounded-full text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online
          </div>
          <div className="flex items-center gap-3 text-zinc-500">
            <button className="material-symbols-outlined hover:bg-orange-50 p-2 rounded-full transition-colors">
              notifications
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP6E2t0mEu_V-gIb4tDSJoyqgXiGCOuHz83dcUtNQTyGymkBlzWTMoL0sie9KC7HdnZH-v2EIycsKncI9FJHVjDifbvv9W_ni7LNkX_L8B-si2nV9KomkSUre7S1VCweXEGmQMy3a9OfZH2x9x8lGNr2cKt9IZWFw2uLYzD8l9pZo4yN0gS40h8Lbco49z6PvDQOWzw4Y49BEi7VuA_N3GUgur1INt-XJxnIo8Scu7-VaOOks-gX0Sri3GiXdTGnraLyGh-RafH29V"
                alt="Vendor avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="p-8 max-w-7xl mx-auto w-full flex-1">
        {/* Page Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight mb-2">
              Order Queue
            </h2>
            <p className="text-on-surface-variant">Manage incoming requests and active kitchen tasks.</p>
          </div>
          <div className="bg-surface-container-low p-1.5 rounded-full flex gap-1">
            <button className="px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 text-primary font-bold shadow-sm text-sm transition-all duration-200">
              New (3)
            </button>
            <button className="px-6 py-2.5 rounded-full text-on-surface-variant font-medium text-sm hover:bg-white/50 transition-all duration-200">
              Active (5)
            </button>
            <button className="px-6 py-2.5 rounded-full text-on-surface-variant font-medium text-sm hover:bg-white/50 transition-all duration-200">
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* New Orders */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              New Requests
            </h3>

            {newOrders.map((order) => (
              <div
                key={order.id}
                className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xl font-headline">
                      {order.initial}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-headline">Order {order.id}</h4>
                      <p className="text-on-surface-variant text-sm font-medium">
                        Customer: <span className="text-on-surface font-semibold">{order.customer}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="bg-orange-50 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 mb-2">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {order.time}
                    </div>
                    <div className="text-2xl font-extrabold text-on-surface font-headline">{order.total}</div>
                  </div>
                </div>

                {order.items.length > 0 && (
                  <div className="bg-surface-container-low rounded-lg p-6 mb-6 border border-outline-variant/5 space-y-3">
                    {order.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-white dark:bg-zinc-900 rounded-md text-xs font-bold text-primary border border-primary-container/20">
                            {item.qty}
                          </span>
                          <span className="text-on-surface font-semibold">{item.name}</span>
                        </div>
                        <span className="text-on-surface-variant text-sm">{item.note}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-gradient-to-br from-primary to-primary-fixed text-white rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Accept Order
                  </button>
                  <button className="px-8 py-4 border border-outline-variant text-on-surface-variant rounded-full font-bold text-sm hover:bg-surface-container-high transition-all">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Active in Kitchen */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Active in Kitchen
            </h3>

            {activeOrders.map((order) => (
              <div key={order.id} className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-primary font-headline">{order.id}</span>
                    <h4 className="font-bold text-on-surface">{order.name}</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <img src={order.img} alt={order.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full mb-4 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${order.progress}%` }} />
                </div>
                <button className="w-full py-2.5 bg-on-surface text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="material-symbols-outlined text-sm">done_all</span>
                  Mark as Ready
                </button>
              </div>
            ))}

            {/* Kitchen Efficiency */}
            <div className="bg-primary/10 rounded-xl p-6 border-2 border-dashed border-primary/20">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <span className="material-symbols-outlined">trending_up</span>
                <span className="font-bold text-sm font-headline">Kitchen Efficiency</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">Avg Prep</p>
                  <p className="text-xl font-extrabold text-on-surface">14m</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">Wait Time</p>
                  <p className="text-xl font-extrabold text-on-surface">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAB */}
      <div className="fixed bottom-10 right-10">
        <button className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-fixed text-white shadow-2xl flex items-center justify-center hover:rotate-90 transition-transform duration-300">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  )
}
