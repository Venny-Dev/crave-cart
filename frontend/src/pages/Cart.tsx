import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialItems = [
  { id: 1, name: 'The Signature Burger', desc: 'Double patty, melted cheddar, brioche bun', price: 12.99, qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVb6CrzBIL_DebemBw9AzIHpqFFLCAe-WLJPj6RYJprRbgJ5tQbZb89HEJzYLqcF_MjLb_LD4kO6Ja_6KgzgfjxD0TIevW0KTYSCzrNUkv-YWYLllJe-LK3lolKrWjV4Fm7PUfGuRkPFbpXgnm5egeo-WAtUD-HeufG07kFwRvKATO_ToUn5IoBg5dwVysuFpEV0sLzWnVf7_2yAfiYaK66jkKX-UNOfMARD4rrjLu5V4fhi81KETfHMN9268mqYTFTBfBKj9zwymf' },
  { id: 2, name: 'Harvest Bowl', desc: 'Quinoa, avocado, cherry tomatoes, microgreens', price: 9.50, qty: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6k07-NoQUnNddS1xrA0xzTIF3t1bXGk0Sfd9kJvGbEiHDMx4WvsMEqVW51HFlHCdqZpq2gCBR_pKH_KzJJ4k9OgWYlQ8ZO8MWpeUN57kGV5SWi6xJvEoqQ3eJxcYlVqH_7VHy6UdeXthkdieLqgIuywXfzFW9knhivyN-dlzkbDhR1xZje6D-VHJ7yF2z_QrXfnpL18fbcpDfhm1218obeshtzEc5tLlsKz8G8h4JpohvRp0ZoOfgQ-S5qle28cLbxxMItRbhzr7j' },
]

export default function Cart() {
  const navigate = useNavigate()
  const [items, setItems] = useState(initialItems)

  const updateQty = (id: number, delta: number) => {
    setItems(prev =>
      prev
        .map(item => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter(item => item.qty > 0)
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const delivery = 2.99
  const total = subtotal + delivery

  return (
    <main className="pt-20 pb-32 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold font-headline mt-8 mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="material-symbols-outlined text-6xl text-outline mb-4">shopping_bag</span>
          <p className="text-on-surface-variant text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Cart Items */}
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-surface-container-lowest rounded-xl p-4">
              <img
                className="w-20 h-20 rounded-xl object-cover shrink-0"
                src={item.img}
                alt={item.name}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-on-surface truncate">{item.name}</h3>
                <p className="text-sm text-on-surface-variant truncate">{item.desc}</p>
                <p className="text-primary font-semibold mt-1">${(item.price * item.qty).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Decrease quantity"
                >
                  <span className="material-symbols-outlined text-base">remove</span>
                </button>
                <span className="w-6 text-center font-semibold">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Increase quantity"
                >
                  <span className="material-symbols-outlined text-base">add</span>
                </button>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="bg-surface-container-lowest rounded-xl p-6 mt-2">
            <h2 className="font-bold font-headline text-lg mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm text-on-surface-variant mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-on-surface-variant mb-4">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="border-t border-outline-variant pt-4 flex justify-between font-bold text-on-surface">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full h-14 bg-primary text-on-primary rounded-full font-bold text-lg hover:opacity-90 active:scale-95 transition-all mt-2"
          >
            Checkout • ${total.toFixed(2)}
          </button>
        </div>
      )}
    </main>
  )
}
