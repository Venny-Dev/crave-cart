import { useState } from 'react'

function Toggle({ defaultChecked = true }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked)
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${on ? 'bg-primary' : 'bg-surface-container-high'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  )
}

const bestSellers = [
  {
    name: 'Handmade Tagliatelle', desc: 'Silky pasta with rustic tomato glaze.', price: '₦24.50', rating: '4.9', available: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCcdFhCaIDIGadsM7AjmuS4WGcHYubq10rQXlVuwSCXE-QBC5gXo99Lm5aceEGG1e345nZwyQY12u2jjWC7iM-GyMI4u8A18dpghgJUqpK6ez9hJpIWvL8DiKaWO_Vm8WpcAc8mvrx34mkNKa_9GJLpargaamKNhdNnOOyeBNbpaJOOdxPJEzZlKM3hF1rfOqpwrFroaE6mL7DhtWTwckXgMUSxKsHbHXyC3R_NNZJm0e9THYXcJeWtqTv4rY3wdZqqjRoRxXV1t7U',
  },
  {
    name: 'Wagyu Truffle Burger', desc: 'Double patty, black truffle aioli.', price: '₦45.00', rating: null, available: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU17k_2HK-eb03IlHZ77RCBufz2yg4_zhXQs5RDqWmx8YRqufadqp9ZAeHbolPtR7vNIS8NUdw23hcs9wU1JUmjPM-0hY-sw0z7Hua8GSlq0Ne_-cHeuWKIzVYzli-bQzbF8JW9jKUG23Ql3yj7OuiLl6_Oc5cJdgMTVDHsg1w4DZVRBf8R7US5KMx9jmGjpYbxvzT3rtO08f51BTmBwmsS41NrvKR4JcqjzDUhX_7Uqcjylxb2oiJrQhMVNHnrIAK_62uMDDWEuL-',
  },
  {
    name: 'Saffron Risotto', desc: 'Milanese style with aged parmesan.', price: '₦32.00', rating: null, available: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-nPDihKRpuXYbimsUt_O8CKDoOtRrbgf6lSaobBx6lXDgT1lSTmu5zacpfsdoWL1-CYk47HWb65jxGh1f73CNc1zVJp1sDyNYErtWQiETYDZN12j0HsIwJI-vWdosatRKNTVal0300sLaH0yLzpSI9zbJwoaZOBJTb73M48jzpCVaGQVSUUGWZtkPpdLtP0VrXNVso5uKlJUvAGArti4cMxZjY-0to4_tKJ-BB17FP6vpwh1fhnDt-13Px2ossr1ThWwjLdxQS2T8',
  },
]

const mainCourses = [
  {
    name: 'Dry-Aged Ribeye', desc: '12oz steak with garlic herb butter', price: '₦85.00',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzRhwmiAE9LTc08IHbjE3RQnosODM4_K1OJQavGoYiuKE5NUwy1mZyITtCDqe_wyg9Jx5_VEF5qHK2DXrCu2Ge8WuU2zg4-KtQHPHn956axGGa5svgxVboWlHAlXI_1JyK9PviOghy_nIuaTqXfsF-gj2_GOZu6VKgWp3wK1l197hRR38YedgIvh6AT2u4m09sH6-fmohCKDgrmHzN8kIB0ONxsy0fy_4gReGqzMqGAp7ncBYlbT4z4voT4ATjawLKkzsP0K2urZo-',
  },
  {
    name: 'Atlantic Salmon', desc: 'Honey glazed with citrus zest', price: '₦52.50',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSGZEuJVW63rcsnlJ_YKh54eNI6TPjXWtBP2NG_gRBDy7_xawogVo2AbZvKmFs7lmU-HP4E22OmOJ6W4nwRvhv3o-EIzD1lerRHrRH43YvS_-xrKKOinttcWI37VPVEdFbe8oVwRzA5Rul3NVcbC-MIeFqhfcJ2Cg8GK_BtjLTZt5cZJG0uGsNX3DVkCZGwR7r0DZCA-e3M8UxTKAfVbjzmV-vgiahiGloZRoJWM5zIQXXiSQauWumbKsVxuP9l7quA0wcj7jsD9zi',
  },
]

const desserts = [
  {
    name: 'Chocolate Fondant', price: '₦18.00',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN3k9L8HHEEHDREL9p_vCK4N5SHkWABpkA5LRBJesUANljLUB88TxpIjH6zSjroPS5sUFhobNvTud6kX4NjPItTVJl-zoIPhWrdKr1ofwKH4amtpEn8D4Kq4rhl3bghHWOOrVgiQi9P5foViMk_2PMOrflPgSGnF_ik-nuNZwBGPMseTCMODv3fyc-KNeW8crTAItDPS9gzOOnVSD8yUOYZETeBCZ5MEB9WXbsfFKHvv22m4K1LtT4evX8Z6kAVBZUaTlRvWb8RJFJ',
  },
  {
    name: 'Berry Cheesecake', price: '₦20.00',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLs-anm1rmqovm2uZJIBDJfXdHKZ76Ec6CCaEww_tfgx-cIfOtAbdesgdrTXc62abZgfCiBKHOBLTmdfP7ZG2_Za4TeTuC1btXVqAeitercSaSgUXNQAuPhFEOtbJoUFka98MogAu_vdtm-iPgdyQFCYKDU342SsXfTcKbQkV6-CDKntJhezXWt3M_LUohinHIHaiYDcUJBGhZLSwe8rwincf24VIrDpu8ZTplVcX2Zl3JxVvJiKJlEmZ9agJmxv2Aqt21-ISC83jh',
  },
]

export default function VendorMenu() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar — hidden on mobile (replaced by sidebar's top bar) */}
      <header className="hidden lg:flex sticky top-0 z-40 bg-surface/80 backdrop-blur-xl shadow-sm shadow-orange-900/5 justify-between items-center px-6 py-4">
        <span className="text-2xl font-extrabold text-primary tracking-tight font-headline">
          The Gastronomic Gallery
        </span>
        <div className="flex items-center gap-6">
          <div className="flex gap-3 text-on-surface-variant">
            <button className="material-symbols-outlined hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
              notifications
            </button>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
            <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWuhSpHCtlu1ghd2AMISLijTP_O4h2H2bzESlJMLz-Ae9sq3iyu3nin9Jm8n87pEXC64RUt1HfJ_KEof1lt5OBTgnaQUG9cmCrNmiedMtJwZAcvPm0iY-4QCQRJ3r1Tg-2-JaHfo-fW_PnyrQ5jrOGm03R9GffcYpk3t68k9zQcIvAsAr4rV6VgpRyp8_gPcP7Txns4gUAi5pjOEyAtfEKfE8URt9Dov1iQz00_mDAn1hlcreqJN4NRSy0RuhvTQWYjhJBk4NOkpEo"
                alt="Vendor avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primary font-bold text-sm">Online</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 md:p-10 space-y-12 flex-1">
        {/* Page Header */}
        <section className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-extrabold font-headline text-on-surface tracking-tight">
              Menu Management
            </h1>
            <p className="text-on-surface-variant">Curate and refine your culinary gallery.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search dish name..."
                className="bg-surface-container-low border-none rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-64 text-sm placeholder:text-outline text-on-surface"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">
                search
              </span>
            </div>
            <button className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
              <span className="material-symbols-outlined">add</span>
              Add Item
            </button>
          </div>
        </section>

        <div className="grid grid-cols-12 gap-8">
          {/* Best Sellers */}
          <section className="col-span-12 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-headline">Best Sellers</h3>
              <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                Top Performance
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestSellers.map((item) => (
                <div
                  key={item.name}
                  className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group ${!item.available ? 'grayscale opacity-70 border border-dashed border-outline-variant/20' : ''}`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {item.rating && (
                      <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-on-surface flex items-center gap-1">
                        <span
                          className="material-symbols-outlined text-[14px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        {item.rating}
                      </div>
                    )}
                    {!item.available && (
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <span className="bg-zinc-900/80 text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm">
                          OUT OF STOCK
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg font-headline">{item.name}</h4>
                        <p className="text-on-surface-variant text-sm">{item.desc}</p>
                      </div>
                      <span className={`text-xl font-extrabold font-headline ${item.available ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {item.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                      <span className="text-xs font-bold text-on-surface-variant">Availability</span>
                      <Toggle defaultChecked={item.available} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Course */}
          <section className="col-span-12 lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-bold font-headline">Main Course</h3>
            <div className="space-y-4">
              {mainCourses.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold font-headline">{item.name}</h5>
                      <p className="text-xs text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-bold text-lg font-headline">{item.price}</span>
                    <Toggle />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Desserts */}
          <section className="col-span-12 lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold font-headline">Desserts</h3>
            <div className="bg-surface-container-low rounded-xl p-6 space-y-6">
              {desserts.map((item) => (
                <div key={item.name} className="flex gap-4">
                  <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <h6 className="font-bold text-sm">{item.name}</h6>
                      <Toggle />
                    </div>
                    <p className="text-xl font-bold text-primary font-headline">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
