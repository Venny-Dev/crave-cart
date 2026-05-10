import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DELIVERY = 2.99

const orderItems = [
  { id: 1, name: 'The Signature Burger', price: 12.99, qty: 1 },
  { id: 2, name: 'Harvest Bowl', price: 9.50, qty: 2 },
]

type Step = 'delivery' | 'payment' | 'confirm'

export default function Checkout() {
  const navigate = useNavigate()
  const [step, setStep] = useState<Step>('delivery')
  const [placed, setPlaced] = useState(false)
  const [delivery, setDelivery] = useState({ name: '', address: '', city: '', phone: '' })
  const [payment, setPayment] = useState({ card: '', expiry: '', cvv: '' })

  const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0)
  const total = subtotal + DELIVERY

  const handlePlaceOrder = () => {
    setPlaced(true)
    setTimeout(() => navigate('/orders'), 2500)
  }

  if (placed) {
    return (
      <main className="pt-20 pb-32 max-w-md mx-auto px-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
        <span className="material-symbols-outlined text-7xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <h1 className="text-2xl font-bold font-headline mb-2">Order Placed!</h1>
        <p className="text-on-surface-variant">Redirecting to your orders...</p>
      </main>
    )
  }

  return (
    <main className="pt-20 pb-32 max-w-2xl mx-auto px-6">
      <Link to="/cart" className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors mt-8 mb-6">
        <span className="material-symbols-outlined text-base">arrow_back</span>
        <span className="text-sm font-semibold">Back to Cart</span>
      </Link>

      <h1 className="text-3xl font-bold font-headline mb-8">Checkout</h1>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {(['delivery', 'payment', 'confirm'] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              step === s ? 'bg-primary text-on-primary'
              : (['delivery', 'payment', 'confirm'] as Step[]).indexOf(step) > i ? 'bg-primary/20 text-primary'
              : 'bg-surface-container text-on-surface-variant'
            }`}>
              {i + 1}
            </div>
            <span className={`text-sm font-semibold capitalize hidden sm:block ${step === s ? 'text-on-surface' : 'text-on-surface-variant'}`}>
              {s}
            </span>
            {i < 2 && <span className="text-outline-variant mx-1">›</span>}
          </div>
        ))}
      </div>

      {/* Delivery step */}
      {step === 'delivery' && (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold font-headline text-lg">Delivery Details</h2>
          {([
            { label: 'Full Name', key: 'name', placeholder: 'John Doe', type: 'text' },
            { label: 'Address', key: 'address', placeholder: '123 Main St', type: 'text' },
            { label: 'City', key: 'city', placeholder: 'New York', type: 'text' },
            { label: 'Phone', key: 'phone', placeholder: '+1 555 000 0000', type: 'tel' },
          ] as const).map(({ label, key, placeholder, type }) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-on-surface-variant mb-1">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={delivery[key]}
                onChange={e => setDelivery(prev => ({ ...prev, [key]: e.target.value }))}
                className="w-full h-12 px-4 bg-surface-container-lowest rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30 text-on-surface placeholder:text-outline-variant"
              />
            </div>
          ))}
          <button
            onClick={() => setStep('payment')}
            disabled={!delivery.name || !delivery.address || !delivery.city || !delivery.phone}
            className="w-full h-14 bg-primary text-on-primary rounded-full font-bold text-lg hover:opacity-90 active:scale-95 transition-all mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue to Payment
          </button>
        </div>
      )}

      {/* Payment step */}
      {step === 'payment' && (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold font-headline text-lg">Payment</h2>
          {([
            { label: 'Card Number', key: 'card', placeholder: '4242 4242 4242 4242', type: 'text' },
            { label: 'Expiry', key: 'expiry', placeholder: 'MM / YY', type: 'text' },
            { label: 'CVV', key: 'cvv', placeholder: '•••', type: 'password' },
          ] as const).map(({ label, key, placeholder, type }) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-on-surface-variant mb-1">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={payment[key]}
                onChange={e => setPayment(prev => ({ ...prev, [key]: e.target.value }))}
                className="w-full h-12 px-4 bg-surface-container-lowest rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30 text-on-surface placeholder:text-outline-variant"
              />
            </div>
          ))}
          <div className="flex gap-3 mt-2">
            <button onClick={() => setStep('delivery')} className="flex-1 h-14 bg-surface-container text-on-surface rounded-full font-bold hover:bg-surface-container-high transition-colors">
              Back
            </button>
            <button
              onClick={() => setStep('confirm')}
              disabled={!payment.card || !payment.expiry || !payment.cvv}
              className="flex-1 h-14 bg-primary text-on-primary rounded-full font-bold hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Review Order
            </button>
          </div>
        </div>
      )}

      {/* Confirm step */}
      {step === 'confirm' && (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold font-headline text-lg">Review & Confirm</h2>

          <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col gap-3">
            {orderItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-on-surface">{item.name} × {item.qty}</span>
                <span className="font-semibold text-on-surface">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-outline-variant pt-3 flex justify-between text-sm text-on-surface-variant">
              <span>Delivery</span><span>${DELIVERY.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-on-surface">
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-4 text-sm text-on-surface-variant">
            <p className="font-semibold text-on-surface mb-1">Delivering to</p>
            <p>{delivery.name} · {delivery.phone}</p>
            <p>{delivery.address}, {delivery.city}</p>
          </div>

          <div className="flex gap-3 mt-2">
            <button onClick={() => setStep('payment')} className="flex-1 h-14 bg-surface-container text-on-surface rounded-full font-bold hover:bg-surface-container-high transition-colors">
              Back
            </button>
            <button onClick={handlePlaceOrder} className="flex-1 h-14 bg-primary text-on-primary rounded-full font-bold hover:opacity-90 active:scale-95 transition-all">
              Place Order • ${total.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
