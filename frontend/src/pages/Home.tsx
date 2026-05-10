import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="pt-20 pb-32 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="mt-8 mb-12">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
              The Gastronomic <br /><span className="text-primary italic">Gallery</span>
            </h1>
            <div className="relative flex items-center group">
              <span className="absolute left-4 text-outline material-symbols-outlined">search</span>
              <input
                className="w-full h-16 pl-14 pr-32 bg-surface-container-lowest rounded-full border-none focus:ring-2 focus:ring-primary/20 shadow-sm text-lg placeholder:text-outline-variant font-body transition-all"
                placeholder="What would you like to eat?"
                type="text"
              />
              <button className="absolute right-2 h-12 px-6 bg-primary text-on-primary rounded-full font-semibold hover:opacity-90 transition-opacity active:scale-95">
                Search
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block">
            <img
              className="w-64 h-64 object-cover rounded-xl shadow-2xl rotate-3"
              alt="Gourmet dish presentation with fresh herbs and colorful ingredients on a rustic ceramic plate"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt5VMwzFhMj9JN6F3mrKRAos6Tt79XcXv4NmINkEGl2i8xM2kf7rQ0gM0dxBXUhe_bF9txbpoDukz5J5TaX3pGFB10P0DWzx84Lv56qCtolGefIVsUW_nqPIQRBbAGoEzXfBkFaLTgQWNXkzmpIhDgNVc60PFsUWK3IfiI9bSoy-el-rpGXG-e7YkRv1HlxQWeSnv31lPHXypM8So0gXM_3f0fRP1rCX5IH3WpUAMnRZFX0A7SurkwkaWNZaP3iOeA81zwIcdD0gpQ"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold font-headline">Explore Cuisines</h2>
          <button className="text-primary font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6">
          {[
            { icon: 'local_pizza', label: 'Pizza', active: true },
            { icon: 'rice_bowl', label: 'Rice' },
            { icon: 'local_bar', label: 'Drinks' },
            { icon: 'lunch_dining', label: 'Fast Food' },
            { icon: 'eco', label: 'Healthy' },
            { icon: 'bakery_dining', label: 'Bakery' },
          ].map(({ icon, label, active }) => (
            <div key={label} className="shrink-0 group cursor-pointer text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 transition-colors ${
                active
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 group-active:scale-90 transition-transform'
                  : 'bg-surface-container-high text-on-surface-variant group-hover:bg-primary-container/30'
              }`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </div>
              <span className="text-sm font-semibold font-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold font-headline mb-8">Nearby Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'The Golden Grill', desc: 'Steakhouse • Continental • $$', time: '20-30 min', delivery: 'Free Delivery', rating: '4.8', extraClass: '', alt: 'Modern upscale restaurant interior', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhqUlXTBxIbrMWGbLy_9OHP3UB41byGVnMGDFvLvN1r-cvvid0vKU1B_ZgIoJAfvm_3H7vlhY4eRp3jqCCp__4gTrk_IieDSVMyab3pefZkmoJFLsx_4r3-woyZMDJIrAcZv0JXvFSuX8k7ucyx_RgWHgAF7xvQvoK1Igqy6ap5SAqQRIpX74yW45INHJ709-D0Hkx7DZi6FvtpMD1og0O_2Cbpa_26L5cjVrbWCOxRl_t8RFAmJGOtwpHmw2JxXcr4PYACtczg8tI' },
            { name: 'Trattoria Bella', desc: 'Italian • Authentic • $', time: '15-25 min', delivery: '$ Delivery', rating: '4.5', extraClass: '', alt: 'Cozy Italian bistro setting', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoWpm11YOUrn847JMeZNca-as_AzMOdAOhumHSym-tZ3sz9z0cM2b-Zi8ES2HAiEoCo-4omkzi7crQf-Bb8k45cJGpKfXOXb3tpdL9I5Vyqx7Q6R0BidM03ttKwE5McDSfkOxcKAJXEKQZ6jE_91zsB8wAvMZ7QhzHsiBnXBpkTBuIKkDn_OARo8W-xLGMKLmGGmk_igh8o0UXwE8KM6XPUIuczKi9G072-HKd0TLe5wCy_C75RAKAzG0CNUESQQL-xLYh3FMpi9Q9' },
            { name: 'Zen Sushi Art', desc: 'Japanese • Sushi • $$', time: '35-45 min', delivery: 'Free Delivery', rating: '4.9', extraClass: 'md:hidden lg:block', alt: 'Vibrant sushi bar', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvzA9N8yHf2RNvAebC7nKDj_xVDxZS9mE2_G7-UN2Ig6bnUyJ5wrP_2IrpR0Ha96_Ls8oiOo7y_x5XBnmuI6leFjGg1X_E1U6iFg-FnMWp3CNqsAdRrxvwOQ5Qb6cEuGQ-tWmFIZ_VA3RrBpNulIuqjqpOdIWe6z4d9K9dyv-4V_ysaJFhN75uprQVM4JBcdDVCtIIOfewUFIX2p3CGxaps4zFwJIPBvG8liWwVOw2f4-wpi2xh8IQCFH8eHwh-xJZWTINiRu43HTz' },
          ].map(({ name, desc, time, delivery, rating, img, alt, extraClass }) => (
            <div key={name} className={`group relative bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ${extraClass}`}>
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={alt} src={img} />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-orange-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold text-on-surface">{rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-on-surface-variant text-sm mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary-fixed-dim">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    <span className="text-xs font-semibold">{time}</span>
                  </div>
                  <div className="text-xs font-semibold text-outline">{delivery}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Meals - Bento Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-headline mb-8">Popular Meals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl h-[420px] bg-surface-container">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Juicy double cheeseburger with melting cheddar, fresh lettuce, and tomato on a toasted brioche bun"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVb6CrzBIL_DebemBw9AzIHpqFFLCAe-WLJPj6RYJprRbgJ5tQbZb89HEJzYLqcF_MjLb_LD4kO6Ja_6KgzgfjxD0TIevW0KTYSCzrNUkv-YWYLllJe-LK3lolKrWjV4Fm7PUfGuRkPFbpXgnm5egeo-WAtUD-HeufG07kFwRvKATO_ToUn5IoBg5dwVysuFpEV0sLzWnVf7_2yAfiYaK66jkKX-UNOfMARD4rrjLu5V4fhi81KETfHMN9268mqYTFTBfBKj9zwymf"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-on-primary mb-3 inline-block uppercase tracking-wider">Top Seller</span>
              <h3 className="text-3xl font-bold text-white mb-2">The Signature Burger</h3>
              <p className="text-stone-300 mb-6 font-body">Double patty, melted cheddar, brioche bun</p>
              <button className="flex items-center gap-2 bg-white text-on-surface px-6 py-3 rounded-full font-bold active:scale-95 transition-all">
                Add to Cart • $12.99
              </button>
            </div>
          </div>
          {[
            { label: 'Harvest Bowl', price: '$9.50', colSpan: 'col-span-2', alt: 'Colorful quinoa salad bowl', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6k07-NoQUnNddS1xrA0xzTIF3t1bXGk0Sfd9kJvGbEiHDMx4WvsMEqVW51HFlHCdqZpq2gCBR_pKH_KzJJ4k9OgWYlQ8ZO8MWpeUN57kGV5SWi6xJvEoqQ3eJxcYlVqH_7VHy6UdeXthkdieLqgIuywXfzFW9knhivyN-dlzkbDhR1xZje6D-VHJ7yF2z_QrXfnpL18fbcpDfhm1218obeshtzEc5tLlsKz8G8h4JpohvRp0ZoOfgQ-S5qle28cLbxxMItRbhzr7j' },
            { label: 'Smoked Ribs', price: '$15.00', colSpan: 'col-span-1', alt: 'Oven-baked barbecue pork ribs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnr7wnIjnrQjlcvwwduo1FsdVaJE-6DwK9wWCzo6mpLe6K8x0GMOzjs2Kc9lHmd-acE8Qxbx_Xx6o8PHMkT5I0n4IAzrjttdwNOJ7DucIhE2fW_F88FNZppmW9zOEZZLTTdHXiOknl1KqPZeKGIzwBZEPTbaGEo6zPVHAXJmZHdHVHoHQsLFPJpwk_N3GNglJcCuAHisVzaQJSISGKVrlCYH23L370cZuy8LwCPdLnB1ZF8-6aDu_HUYJsX5zDj8_giiV_pfPZd7tH' },
            { label: 'Pepperoni', price: '$11.20', colSpan: 'col-span-1', alt: 'Slice of pepperoni pizza', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKCygeUqpIVVM-t5B7JVNc7cdD0TAprx5Slsov0RcqS4HSBpMV0n5Xtlh1XzqlysKpFqhYRNgBC0mKF4QT2HwBcrPPERWhcNnVE8DaJP8-qaS-mYiBxZqStBhRmlz5rFHyLcSyOdUYuRjX0kmYaT2ZLBMlpfhs_Ho7AyqTCE-LqL3FMROoYm6fPsS_TxeFjHaQ21_Ji_kq1VSxWKvqHgCh0zQbkUyIoVDjxa-Tw4u-EROOk2VFp-cdGD2fhIe5wDOkBkzK9Q-glfN9' },
          ].map(({ label, price, colSpan, alt, img }) => (
            <div key={label} className={`${colSpan} group relative rounded-xl overflow-hidden h-[200px] bg-surface-container`}>
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={alt} src={img} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold text-white">{label}</h4>
                <p className="text-white/80 text-xs">{price}</p>
              </div>
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <Link
        to="/cart"
        className="fixed right-6 bottom-32 md:bottom-12 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
      >
        <span className="material-symbols-outlined text-3xl">shopping_cart</span>
        <span className="absolute -top-1 -right-1 bg-on-secondary-fixed text-on-primary text-[10px] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">2</span>
      </Link>
    </main>
  )
}
