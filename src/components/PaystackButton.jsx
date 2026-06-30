<<<<<<< HEAD
import Button from './Button';

export default function PaystackButton({ email = '', amount = 100000, reference, disabled = false }) {
=======
export default function PaystackButton({ email = '', amount = 100000, reference }) {
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
  const handlePay = () => {
    const handler = window.PaystackPop && window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_live_69f04a2dfeb908b3c45e239639db4c9783aa46b9',
      email,
      amount: Math.round(amount) * 100,
      currency: 'NGN',
      ref: reference || ('IFY-' + Date.now()),
      callback: function (response) {
        alert('Payment complete! Ref: ' + response.reference);
      },
      onClose: function () {}
    });
    if (handler) handler.openIframe();
    else alert('Paystack script not loaded yet. Try again in a second.');
  }
<<<<<<< HEAD
  return <Button onClick={handlePay} disabled={disabled}>Pay with Paystack</Button>
=======
  return <button onClick={handlePay} className="btn btn-primary">Pay with Paystack</button>
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
}
