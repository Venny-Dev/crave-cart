import { useState } from 'react'

const inputCls = 'w-full px-5 py-3.5 rounded-lg bg-surface-container-low border-none outline-none focus:ring-2 focus:ring-primary/20 font-medium text-on-surface placeholder:text-outline'
const labelCls = 'block text-sm font-bold text-on-surface-variant mb-2 ml-1'

const hours = [
  { day: 'Mon', open: '09:00', close: '21:00' },
  { day: 'Tue', open: '09:00', close: '21:00' },
  { day: 'Wed', open: '09:00', close: '21:00' },
  { day: 'Thu', open: '09:00', close: '21:00' },
  { day: 'Fri', open: '09:00', close: '23:00' },
  { day: 'Sat', open: '10:00', close: '23:00' },
]

function PauseToggle() {
  const [paused, setPaused] = useState(false)
  return (
    <button
      role="switch"
      aria-checked={paused}
      onClick={() => setPaused(!paused)}
      className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${paused ? 'bg-error' : 'bg-surface-container-highest'}`}
    >
      <span className={`absolute top-0.5 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200 ${paused ? 'translate-x-7' : 'translate-x-0'}`} />
    </button>
  )
}

export default function VendorSettings() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl shadow-sm shadow-orange-900/5 flex justify-between items-center px-6 py-4">
        <span className="text-2xl font-extrabold text-primary tracking-tight font-headline">
          The Gastronomic Gallery
        </span>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary font-semibold active:scale-95 duration-200">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Online
          </button>
          <div className="flex items-center gap-3">
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors">
              notifications
            </button>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKgUUY1fpPVTk12jMfvZCE1EHuzomg0iQ0_aHNmCPGQSlViw1mitgyva60MglED6pNsRQeVkIjXM7tTN3y67vTCsIBvRHeA5ZrKYIU6i4EwTg6j7Vi6YRDaDH2i6VCfCHb4Hl6C82J-2V_kD6SZHYyRJlegCXhaiyq842VSHmlDEgdxUpVZZ7L0bP8NK7kggccvvaUNtC1vDz4IMo3dX05w3PRdW2AzQ9eIV_RVT6eb-5IDJ07bWUGTFmhRdJA4YRE6MjvjRMKlFt-"
              alt="Vendor avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">
                Restaurant Settings
              </h1>
              <p className="text-on-surface-variant">Manage your gallery appearance and operational status.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 rounded-full font-semibold text-on-surface-variant bg-surface-container-highest hover:bg-surface-variant transition-colors">
                Discard
              </button>
              <button className="px-8 py-2.5 rounded-full font-bold text-on-primary bg-linear-to-br from-primary to-primary-fixed shadow-md active:scale-95 transition-all">
                Save Changes
              </button>
            </div>
          </div>

          {/* Cover + Logo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-highest h-64 cursor-pointer">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7zZ8CBuKY5MKGEBUW1-oBFmdiHkfZOBl4-RSdtp8CXqeqCbvypR3RikVLlYBd_ssXsQLd9xe27JOzMg5KXenbE02i2xP_8szPkHGE1lai9x_Q_XSge_ETONZXlW4VT0VPOP4PSxnqoq4pFUAPTfZk-Hf3jxO4q8Q7SDDrag0rHFPOAyoixc5kbEpZcgHdlfVflszqKvO_ItXj_TXt3fRBD92sC4yzN3FUFw-h7bR5F9gRG2D54eAYzlhQHpJErSHuHAHLocLJ_U6R"
                alt="Cover photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined">add_a_photo</span>
                  Change Cover Photo
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest h-64 border border-outline-variant/15 flex flex-col items-center justify-center p-6 text-center cursor-pointer">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHWkgtf-Nrx-ZK6w37TOsDjUoEHFIerQpTqjmwSAawjdpxMcgEyuADYk2xOUYFYsS777z4Ni6291lBlaOFBIQyScGxxoxq6C6Sw-SEKJfFDjWrROLavSp49YZHlR5LOCTMy-R5vE5soDArdgQBwZJVmKIhBD_fwt5ALarxLX_xyNoAZqzabjq3CkSfkoYosMk9cFhN17H3pH98Nz0Jz8kIdqIwoPQYdWG4LgRam-U1L0QwvmxQXOPF5HZBTe3CAe2h9fvjQWKfHOEZ"
                  alt="Restaurant logo"
                  className="w-full h-full rounded-full object-cover shadow-xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="material-symbols-outlined text-white">edit</span>
                </div>
              </div>
              <span className="text-sm font-bold text-on-surface">Gallery Logo</span>
              <span className="text-xs text-on-surface-variant">Recommended: 500x500px</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Info & Status */}
            <div className="lg:col-span-2 space-y-8">
              {/* Store Status */}
              <section className="p-8 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                <h2 className="text-xl font-bold mb-1 font-headline flex items-center gap-2">
                  Store Status
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </h2>
                <p className="text-sm text-on-surface-variant mb-6">Manage your live presence on the platform.</p>
                <div className="p-6 rounded-lg bg-error/10 border border-error/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-error/20 text-error">
                      <span className="material-symbols-outlined">pause_circle</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Pause Orders</p>
                      <p className="text-sm text-on-surface-variant">Customers won't be able to place orders while paused</p>
                    </div>
                  </div>
                  <PauseToggle />
                </div>
              </section>

              {/* General Info */}
              <section className="p-8 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                <h2 className="text-xl font-bold mb-6 font-headline">General Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className={labelCls}>Restaurant Name</label>
                    <input type="text" defaultValue="Le Petit Bistro" className={inputCls} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Tagline</label>
                    <input type="text" placeholder="Authentic French flavors in the heart of the city" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 0123-456" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Support Email</label>
                    <input type="email" defaultValue="contact@lepetitbistro.com" className={inputCls} />
                  </div>
                </div>
              </section>

              {/* Operations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">timer</span>
                    <h3 className="font-bold font-headline">Prep Time</h3>
                  </div>
                  <div className="relative">
                    <input type="text" defaultValue="20-30 mins" className={inputCls} />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">Estimated</span>
                  </div>
                </div>
                <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    <h3 className="font-bold font-headline">Minimum Order</h3>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">$</span>
                    <input type="number" defaultValue="15.00" className={`${inputCls} pl-8`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Business Hours */}
            <div className="lg:col-span-1">
              <section className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/20 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold font-headline">Business Hours</h2>
                  <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                </div>
                <div className="space-y-4">
                  {hours.map(({ day, open, close }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="font-bold text-sm w-10">{day}</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          defaultValue={open}
                          className="w-20 p-2 text-xs rounded-lg bg-surface-container-lowest border-none outline-none text-center font-medium text-on-surface"
                        />
                        <span className="text-on-surface-variant">—</span>
                        <input
                          type="text"
                          defaultValue={close}
                          className="w-20 p-2 text-xs rounded-lg bg-surface-container-lowest border-none outline-none text-center font-medium text-on-surface"
                        />
                      </div>
                      <button className="text-primary p-1 rounded-full hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center justify-between opacity-50">
                    <span className="font-bold text-sm w-10">Sun</span>
                    <span className="text-xs font-bold text-on-surface-variant italic flex-1 text-center">Closed</span>
                    <button className="text-primary p-1 rounded-full">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                  Apply Holiday Hours
                </button>
              </section>
            </div>
          </div>

          <div className="pt-8 pb-20 border-t border-outline-variant/10">
            <p className="text-center text-xs text-on-surface-variant italic">
              Last updated: October 24, 2023 at 11:42 AM
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
